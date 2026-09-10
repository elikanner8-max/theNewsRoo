import { useCallback, useEffect, useMemo, useState } from "react";

enum LetterState {
	Unknown = 0,
	Absent = 1,
	Present = 2,
	Correct = 3
}

const MAX_ATTEMPTS = 6;
const WORD_LENGTH = 5;
const INVALID_WORD_NOTICE = "Word not in list";
const CONFETTI_COLORS = ["#16a34a", "#f59e0b", "#ef4444", "#0ea5e9", "#a855f7", "#f97316"];
const KEY_ROWS = [
	["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
	["A", "S", "D", "F", "G", "H", "J", "K", "L"],
	["Z", "X", "C", "V", "B", "N", "M"]
];

type ConfettiPiece = {
	left: number;
	drift: number;
	delayMs: number;
	durationMs: number;
	rotationDeg: number;
	widthPx: number;
	heightPx: number;
	color: string;
};

const createConfettiPieces = (count: number): ConfettiPiece[] =>
	Array.from({ length: count }, (_, index) => ({
		left: Math.min(96, 4 + index * (92 / Math.max(count - 1, 1))),
		drift: (index % 2 === 0 ? 1 : -1) * (16 + (index % 5) * 5),
		delayMs: (index % 7) * 40,
		durationMs: 1100 + (index % 6) * 120,
		rotationDeg: (index % 2 === 0 ? 1 : -1) * (14 + (index % 4) * 8),
		widthPx: 7 + (index % 3),
		heightPx: 11 + (index % 4),
		color: CONFETTI_COLORS[index % CONFETTI_COLORS.length]
	}));

const emptyBoard = () =>
	Array.from({ length: MAX_ATTEMPTS }, () =>
		Array.from({ length: WORD_LENGTH }, () => "")
	);

const emptyStatusBoard = () =>
	Array.from({ length: MAX_ATTEMPTS }, () =>
		Array.from({ length: WORD_LENGTH }, () => LetterState.Unknown)
	);

const normalizeWordList = (content: string) =>
	content
		.split(/\r?\n/)
		.map(word => word.trim().toUpperCase())
		.filter(word => word.length === WORD_LENGTH);

const compareGuess = (guess: string, answer: string): LetterState[] => {
	const result = Array.from({ length: WORD_LENGTH }, () => LetterState.Unknown);
	let remainder = answer;

	for (let i = 0; i < WORD_LENGTH; i++) {
		if (guess[i] === answer[i]) {
			result[i] = LetterState.Correct;
			remainder = remainder.replace(guess[i], "");
		}
	}

	for (let i = 0; i < WORD_LENGTH; i++) {
		if (result[i] === LetterState.Correct) continue;
		if (remainder.includes(guess[i])) {
			result[i] = LetterState.Present;
			remainder = remainder.replace(guess[i], "");
		} else {
			result[i] = LetterState.Absent;
		}
	}

	return result;
};

const cellClassFor = (state: LetterState) => {
	switch (state) {
		case LetterState.Correct:
			return "bg-emerald-700 border-emerald-700 text-white";
		case LetterState.Present:
			return "bg-amber-600 border-amber-600 text-white";
		case LetterState.Absent:
			return "bg-zinc-600 border-zinc-600 text-white";
		default:
			return "bg-white border-line text-ink";
	}
};

const keyClassFor = (state: LetterState) => {
	switch (state) {
		case LetterState.Correct:
			return "bg-emerald-700 text-white border-emerald-700";
		case LetterState.Present:
			return "bg-amber-600 text-white border-amber-600";
		case LetterState.Absent:
			return "bg-zinc-600 text-white border-zinc-600";
		default:
			return "bg-surface text-ink border-line";
	}
};

export default function wordgameGame() {
	const [board, setBoard] = useState<string[][]>(emptyBoard);
	const [statusBoard, setStatusBoard] = useState<LetterState[][]>(emptyStatusBoard);
	const [invalidPulse, setInvalidPulse] = useState(0);
	const [attemptIndex, setAttemptIndex] = useState(0);
	const [letterIndex, setLetterIndex] = useState(0);
	const [acceptableWords, setAcceptableWords] = useState<Set<string>>(new Set());
	const [solutionWords, setSolutionWords] = useState<string[]>([]);
	const [answer, setAnswer] = useState("");
	const [notice, setNotice] = useState("Loading word banks...");
	const [invalidNoticeFading, setInvalidNoticeFading] = useState(false);
	const [didWin, setDidWin] = useState(false);
	const [showWinConfetti, setShowWinConfetti] = useState(false);
	const [confettiBurst, setConfettiBurst] = useState(0);
	const [isReady, setIsReady] = useState(false);

	const [keyStatuses, setKeyStatuses] = useState<Map<string, LetterState>>(new Map());

	const isGameOver = didWin || attemptIndex >= MAX_ATTEMPTS;
	const confettiPieces = useMemo(() => createConfettiPieces(22), []);

	const triggerInvalidGuess = useCallback((message: string) => {
		setInvalidNoticeFading(false);
		setNotice(message);
		setInvalidPulse(prev => prev + 1);
	}, []);

	const pickRandomAnswer = useCallback((list: string[]) => {
		if (list.length === 0) return;
		const i = Math.floor(Math.random() * list.length);
		setAnswer(list[i]);
	}, []);

	const resetGame = useCallback(() => {
		setBoard(emptyBoard());
		setStatusBoard(emptyStatusBoard());
		setInvalidPulse(0);
		setAttemptIndex(0);
		setLetterIndex(0);
		setKeyStatuses(new Map());
		setDidWin(false);
		setShowWinConfetti(false);
		setNotice("");
		pickRandomAnswer(solutionWords);
	}, [pickRandomAnswer, solutionWords]);

	useEffect(() => {
		if (!showWinConfetti) return;
		const timer = window.setTimeout(() => {
			setShowWinConfetti(false);
		}, 1900);
		return () => window.clearTimeout(timer);
	}, [confettiBurst, showWinConfetti]);

	useEffect(() => {
		if (notice !== INVALID_WORD_NOTICE) {
			setInvalidNoticeFading(false);
			return;
		}

		const fadeTimer = window.setTimeout(() => {
			setInvalidNoticeFading(true);
		}, 0);

		const clearTimer = window.setTimeout(() => {
			setNotice(current =>
				current === INVALID_WORD_NOTICE ? "" : current
			);
			setInvalidNoticeFading(false);
		}, 4500);

		return () => {
			window.clearTimeout(fadeTimer);
			window.clearTimeout(clearTimer);
		};
	}, [notice]);

	useEffect(() => {
		const loadWords = async () => {
			try {
				const [solutionRes, acceptableRes] = await Promise.all([
					fetch("/wordgamebank.txt"),
					fetch("/wordgamebank.txt")				]);

				const [solutionText, acceptableText] = await Promise.all([
					solutionRes.text(),
					acceptableRes.text()
				]);

				const solutions = normalizeWordList(solutionText);
				const acceptable = new Set(normalizeWordList(acceptableText));
				solutions.forEach(word => acceptable.add(word));

				setSolutionWords(solutions);
				setAcceptableWords(acceptable);
				setIsReady(true);
				setNotice("");
				pickRandomAnswer(solutions);
			} catch {
				setNotice("Unable to load words. Refresh to try again.");
			}
		};

		loadWords();
	}, [pickRandomAnswer]);

	const pushLetter = useCallback(
		(letter: string) => {
			if (!isReady || isGameOver || letterIndex >= WORD_LENGTH) return;
			setNotice("");
			setBoard(prev => {
				const next = prev.map(row => [...row]);
				next[attemptIndex][letterIndex] = letter;
				return next;
			});
			setLetterIndex(prev => prev + 1);
		},
		[attemptIndex, isGameOver, isReady, letterIndex]
	);

	const popLetter = useCallback(() => {
		if (!isReady || isGameOver || letterIndex === 0) return;
		setBoard(prev => {
			const next = prev.map(row => [...row]);
			next[attemptIndex][letterIndex - 1] = "";
			return next;
		});
		setLetterIndex(prev => prev - 1);
	}, [attemptIndex, isGameOver, isReady, letterIndex]);

	const submitGuess = useCallback(() => {
		if (!isReady || isGameOver) return;
		if (letterIndex < WORD_LENGTH) {
			triggerInvalidGuess("Not enough letters");
			return;
		}

		const guess = board[attemptIndex].join("");
		if (!acceptableWords.has(guess)) {
			triggerInvalidGuess(INVALID_WORD_NOTICE);
			return;
		}

		const nextStatuses = compareGuess(guess, answer);
		setStatusBoard(prev => {
			const next = prev.map(row => [...row]);
			next[attemptIndex] = nextStatuses;
			return next;
		});

		setKeyStatuses(prev => {
			const next = new Map(prev);
			nextStatuses.forEach((state, idx) => {
				const letter = guess[idx];
				const oldState = next.get(letter) ?? LetterState.Unknown;
				if (state > oldState) {
					next.set(letter, state);
				}
			});
			return next;
		});

		if (guess === answer) {
			setDidWin(true);
			setShowWinConfetti(true);
			setConfettiBurst(prev => prev + 1);
			setNotice("You solved it.");
			return;
		}

		if (attemptIndex + 1 >= MAX_ATTEMPTS) {
			setNotice(`No more guesses. The word was ${answer}.`);
			setAttemptIndex(prev => prev + 1);
			setLetterIndex(0);
			return;
		}

		setAttemptIndex(prev => prev + 1);
		setLetterIndex(0);
		setNotice("");
	}, [
		acceptableWords,
		answer,
		attemptIndex,
		board,
		isGameOver,
		isReady,
		letterIndex,
		triggerInvalidGuess
	]);

	const onKeyAction = useCallback(
		(key: string) => {
			if (key === "ENTER") {
				submitGuess();
				return;
			}
			if (key === "DELETE") {
				popLetter();
				return;
			}
			pushLetter(key);
		},
		[popLetter, pushLetter, submitGuess]
	);

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.metaKey || event.ctrlKey || event.altKey) return;
			if (event.key === "Enter") {
				event.preventDefault();
				onKeyAction("ENTER");
				return;
			}
			if (event.key === "Backspace") {
				event.preventDefault();
				onKeyAction("DELETE");
				return;
			}
			const key = event.key.toUpperCase();
			if (/^[A-Z]$/.test(key)) {
				event.preventDefault();
				onKeyAction(key);
			}
		};

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [onKeyAction]);

	const summary = useMemo(() => {
		if (!isReady) return "Loading game...";
		if (didWin) return `Solved in ${attemptIndex} ${attemptIndex === 1 ? "try" : "tries"}.`;
		if (attemptIndex >= MAX_ATTEMPTS) return "Game over.";
		return `Try ${attemptIndex + 1} of ${MAX_ATTEMPTS}`;
	}, [attemptIndex, didWin, isReady]);

	return (
		<section className="surface relative mx-auto max-w-3xl overflow-hidden p-5 md:p-8">
			{showWinConfetti && (
				<div
					key={confettiBurst}
					className="pointer-events-none absolute inset-x-0 top-14 h-44"
					aria-hidden="true"
				>
					{confettiPieces.map((piece, index) => (
						<span
							key={index}
							className="wordgame-confetti-piece"
							style={{
								left: `${piece.left}%`,
								width: `${piece.widthPx}px`,
								height: `${piece.heightPx}px`,
								backgroundColor: piece.color,
								animationDelay: `${piece.delayMs}ms`,
								animationDuration: `${piece.durationMs}ms`,
								transform: `rotate(${piece.rotationDeg}deg)`,
								["--wordgame-drift" as string]: `${piece.drift}px`
							}}
						/>
					))}
				</div>
			)}

			<div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
				<h1 className="text-3xl font-bold tracking-tight">wordgame</h1>
				<button
					type="button"
					className="control"
					onClick={resetGame}
					disabled={!isReady}
				>
					New word
				</button>
			</div>

			<p
				className={`font-ui text-muted mt-4 text-sm transition-opacity ${notice === INVALID_WORD_NOTICE ? "duration-[4500ms] ease-linear" : "duration-500"} ${invalidNoticeFading ? "opacity-0" : "opacity-100"}`}
				aria-live="polite"
			>
				{notice || summary}
			</p>

			<div className="mt-5 grid gap-2" role="grid" aria-label="wordgame board">
				{board.map((row, rowIdx) => (
					<div
						key={`${rowIdx}-${rowIdx === attemptIndex ? invalidPulse : 0}`}
						className={`grid grid-cols-5 gap-2 ${rowIdx === attemptIndex && invalidPulse > 0 ? "wordgame-row-shake" : ""}`}
						role="row"
					>
						{row.map((letter, colIdx) => (
							<div
								key={`${rowIdx}-${colIdx}`}
								role="gridcell"
								className={`flex h-14 items-center justify-center rounded-md border text-2xl font-bold uppercase transition-colors ${cellClassFor(statusBoard[rowIdx][colIdx])}`}
							>
								{letter}
							</div>
						))}
					</div>
				))}
			</div>

			<div className="mt-6 space-y-2" aria-label="wordgame keyboard">
				{KEY_ROWS.map((row, rowIdx) => (
					<div key={rowIdx} className="flex justify-center gap-1.5">
						{rowIdx === 2 && (
							<button
								type="button"
								className="font-ui h-11 rounded border border-line bg-surface px-2 text-xs font-semibold"
								onClick={() => onKeyAction("ENTER")}
							>
								ENTER
							</button>
						)}

						{row.map(key => (
							<button
								key={key}
								type="button"
								className={`font-ui h-11 w-8 rounded border text-sm font-semibold transition-colors md:w-10 ${keyClassFor(keyStatuses.get(key) ?? LetterState.Unknown)}`}
								onClick={() => onKeyAction(key)}
							>
								{key}
							</button>
						))}

						{rowIdx === 2 && (
							<button
								type="button"
								className="font-ui h-11 rounded border border-line bg-surface px-2 text-xs font-semibold"
								onClick={() => onKeyAction("DELETE")}
							>
								DEL
							</button>
						)}
					</div>
				))}
			</div>
		</section>
	);
}

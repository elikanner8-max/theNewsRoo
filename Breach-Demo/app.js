const tagColors = {
  Government: "#9bd9ef",
  Economy: "#d4b06a",
  Housing: "#8ed4b1",
  Education: "#b9a7ff",
  Health: "#e8a0b0",
  Environment: "#95d7c2",
  Culture: "#f0c987",
  Transportation: "#b2d7ff",
  "Public Safety": "#e67686",
  "Good News": "#9be7ba",
  Opinion: "#dfb4ff",
  Analysis: "#a5c8ff",
  "Local News": "#9bd9ef"
};

const imageGradients = [
  "linear-gradient(135deg, #17233f, #5d79a2 44%, #d2e6f2)",
  "linear-gradient(135deg, #281331, #8469a8 48%, #cdeefa)",
  "linear-gradient(135deg, #163326, #59856f 46%, #d7eedf)",
  "linear-gradient(135deg, #2c1e17, #9b7550 48%, #f1d9ad)",
  "linear-gradient(135deg, #1a2730, #607f8d 42%, #d6eff7)",
  "linear-gradient(135deg, #331c29, #a1546f 48%, #ffd6df)",
  "linear-gradient(135deg, #152c3a, #4d8aa5 52%, #d6f6ff)",
  "linear-gradient(135deg, #282519, #898148 50%, #f0e7ad)"
];

const states = [
  ["Alabama", "AL", 32.8, -86.8, ["Birmingham", "Montgomery", "Tuscaloosa", "Mobile", "Huntsville"]],
  ["Alaska", "AK", 61.2, -149.9, ["Anchorage", "Juneau", "Fairbanks", "Sitka", "Bethel"]],
  ["Arizona", "AZ", 34.3, -111.8, ["Phoenix", "Tucson", "Flagstaff", "Mesa", "Yuma"]],
  ["Arkansas", "AR", 35.2, -92.4, ["Little Rock", "Fayetteville", "Jonesboro", "Pine Bluff", "Conway"]],
  ["California", "CA", 36.7, -119.4, ["Los Angeles", "San Diego", "Fresno", "Oakland", "Sacramento"]],
  ["Colorado", "CO", 39.0, -105.5, ["Denver", "Boulder", "Pueblo", "Fort Collins", "Grand Junction"]],
  ["Connecticut", "CT", 41.6, -72.7, ["Hartford", "New Haven", "Stamford", "Waterbury", "Norwich"]],
  ["Delaware", "DE", 39.0, -75.5, ["Wilmington", "Dover", "Newark", "Lewes", "Milford"]],
  ["Florida", "FL", 28.5, -82.4, ["Miami", "Tampa", "Orlando", "Jacksonville", "Tallahassee"]],
  ["Georgia", "GA", 32.7, -83.4, ["Atlanta", "Savannah", "Athens", "Macon", "Augusta"]],
  ["Hawaii", "HI", 21.3, -157.8, ["Honolulu", "Hilo", "Kailua", "Lihue", "Kahului"]],
  ["Idaho", "ID", 44.1, -114.7, ["Boise", "Twin Falls", "Idaho Falls", "Moscow", "Lewiston"]],
  ["Illinois", "IL", 40.0, -89.2, ["Chicago", "Peoria", "Springfield", "Champaign", "Rockford"]],
  ["Indiana", "IN", 39.9, -86.3, ["Indianapolis", "Fort Wayne", "Bloomington", "Gary", "Evansville"]],
  ["Iowa", "IA", 42.0, -93.5, ["Des Moines", "Cedar Rapids", "Ames", "Dubuque", "Sioux City"]],
  ["Kansas", "KS", 38.5, -98.0, ["Wichita", "Topeka", "Lawrence", "Dodge City", "Salina"]],
  ["Kentucky", "KY", 37.8, -85.8, ["Louisville", "Lexington", "Bowling Green", "Paducah", "Frankfort"]],
  ["Louisiana", "LA", 31.0, -92.0, ["New Orleans", "Baton Rouge", "Lafayette", "Shreveport", "Lake Charles"]],
  ["Maine", "ME", 45.3, -69.0, ["Portland", "Bangor", "Augusta", "Lewiston", "Bar Harbor"]],
  ["Maryland", "MD", 39.0, -76.7, ["Baltimore", "Annapolis", "Frederick", "Rockville", "Salisbury"]],
  ["Massachusetts", "MA", 42.3, -71.8, ["Boston", "Cambridge", "Worcester", "Springfield", "Lowell"]],
  ["Michigan", "MI", 44.3, -85.6, ["Detroit", "Grand Rapids", "Lansing", "Flint", "Traverse City"]],
  ["Minnesota", "MN", 46.2, -94.3, ["Minneapolis", "Duluth", "Rochester", "Mankato", "Bemidji"]],
  ["Mississippi", "MS", 32.7, -89.7, ["Jackson", "Biloxi", "Oxford", "Hattiesburg", "Greenville"]],
  ["Missouri", "MO", 38.4, -92.5, ["St. Louis", "Kansas City", "Columbia", "Springfield", "Jefferson City"]],
  ["Montana", "MT", 46.9, -110.4, ["Billings", "Missoula", "Bozeman", "Helena", "Butte"]],
  ["Nebraska", "NE", 41.5, -99.8, ["Omaha", "Lincoln", "Kearney", "Grand Island", "Norfolk"]],
  ["Nevada", "NV", 39.3, -116.6, ["Las Vegas", "Reno", "Carson City", "Elko", "Henderson"]],
  ["New Hampshire", "NH", 43.7, -71.6, ["Manchester", "Concord", "Portsmouth", "Keene", "Hanover"]],
  ["New Jersey", "NJ", 40.1, -74.7, ["Newark", "Trenton", "Jersey City", "Camden", "Princeton"]],
  ["New Mexico", "NM", 34.5, -106.0, ["Albuquerque", "Santa Fe", "Las Cruces", "Roswell", "Taos"]],
  ["New York", "NY", 42.9, -75.5, ["New York", "Buffalo", "Albany", "Rochester", "Syracuse"]],
  ["North Carolina", "NC", 35.5, -79.4, ["Charlotte", "Raleigh", "Asheville", "Durham", "Wilmington"]],
  ["North Dakota", "ND", 47.5, -100.5, ["Fargo", "Bismarck", "Grand Forks", "Minot", "Dickinson"]],
  ["Ohio", "OH", 40.4, -82.8, ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"]],
  ["Oklahoma", "OK", 35.6, -97.5, ["Oklahoma City", "Tulsa", "Norman", "Stillwater", "Lawton"]],
  ["Oregon", "OR", 44.0, -120.6, ["Portland", "Eugene", "Salem", "Bend", "Medford"]],
  ["Pennsylvania", "PA", 41.0, -77.7, ["Philadelphia", "Pittsburgh", "Harrisburg", "Erie", "Scranton"]],
  ["Rhode Island", "RI", 41.7, -71.5, ["Providence", "Newport", "Warwick", "Pawtucket", "Woonsocket"]],
  ["South Carolina", "SC", 33.8, -80.9, ["Charleston", "Columbia", "Greenville", "Myrtle Beach", "Florence"]],
  ["South Dakota", "SD", 44.4, -100.2, ["Sioux Falls", "Rapid City", "Pierre", "Aberdeen", "Brookings"]],
  ["Tennessee", "TN", 35.8, -86.4, ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Murfreesboro"]],
  ["Texas", "TX", 31.0, -99.0, ["Houston", "Dallas", "Austin", "San Antonio", "El Paso"]],
  ["Utah", "UT", 39.3, -111.7, ["Salt Lake City", "Provo", "Ogden", "Moab", "St. George"]],
  ["Vermont", "VT", 44.0, -72.7, ["Burlington", "Montpelier", "Rutland", "Brattleboro", "Stowe"]],
  ["Virginia", "VA", 37.5, -78.6, ["Richmond", "Norfolk", "Charlottesville", "Roanoke", "Alexandria"]],
  ["Washington", "WA", 47.4, -120.7, ["Seattle", "Spokane", "Tacoma", "Olympia", "Yakima"]],
  ["West Virginia", "WV", 38.6, -80.6, ["Charleston", "Morgantown", "Huntington", "Wheeling", "Beckley"]],
  ["Wisconsin", "WI", 44.5, -89.6, ["Milwaukee", "Madison", "Green Bay", "Eau Claire", "La Crosse"]],
  ["Wyoming", "WY", 43.0, -107.5, ["Cheyenne", "Casper", "Laramie", "Jackson", "Gillette"]]
];

const promptArticles = [
  {
    id: "front-iran",
    title: "House Rebukes Trump on Iran",
    author: "Amy Smith",
    role: "National Reporter",
    publisher: "Breach National Desk",
    publisherLocation: "Washington, DC",
    location: { state: "District of Columbia", code: "DC", city: "Washington", county: "District of Columbia", lat: 38.9, lon: -77.0 },
    date: "2026-06-03",
    tags: ["Government", "Foreign Policy", "War Powers", "Congress", "Analysis"],
    parentTags: ["Government"],
    articleType: ["News", "Analysis"],
    sentiment: "serious",
    entities: ["House of Representatives", "Iran", "Congress"],
    source: "Demo source",
    status: "published",
    image: imageGradients[0],
    summary: "A House resolution challenging presidential war powers becomes a sharp test of congressional oversight.",
    body: [
      "On Wednesday, the House of Representatives approved a resolution aimed at restricting presidential authority to engage in military action against Iran, marking a notable challenge to both the president and the administration's handling of tensions with the country.",
      "Democrats in both chambers have repeatedly pushed for votes to curb war-making powers. In recent weeks, those efforts began attracting support from a small number of Republican lawmakers as well.",
      "The measure, a concurrent resolution, requires approval from both chambers of Congress but does not need the president's signature to take effect. The vote passed narrowly, with four Republicans joining Democrats in support.",
      "Supporters framed the resolution as an overdue assertion of congressional authority. Opponents argued that restricting the administration's flexibility could weaken diplomatic leverage at a delicate moment.",
      "The debate reflected a broader struggle over how much military discretion presidents should have when conflict risks rise quickly and congressional briefings lag behind events."
    ]
  },
  {
    id: "front-constitution",
    title: "The Constitution Has Left Women Behind",
    author: "Jacqueline Jefferson",
    role: "Freelancer",
    publisher: "Freelance",
    publisherLocation: "Tuscaloosa, AL",
    location: { state: "Alabama", code: "AL", city: "Tuscaloosa", county: "Tuscaloosa County", lat: 33.2, lon: -87.6 },
    date: "2026-05-28",
    tags: ["Opinion", "Health", "Civil Rights", "Courts", "Reproductive Rights"],
    parentTags: ["Health", "Government"],
    articleType: ["Opinion"],
    sentiment: "critical",
    entities: ["Supreme Court", "Pew", "Guttmacher"],
    source: "Demo source",
    status: "published",
    image: imageGradients[5],
    summary: "An opinion essay argues that constitutional privacy protections should be expanded and clarified.",
    body: [
      "This opinion essay argues that the country has reached a moment where privacy and bodily autonomy need clearer constitutional protection. The author frames abortion access as part of a larger question about the limits of state power.",
      "The essay points to polling and state-level ballot results to argue that many Americans reject total abortion bans and want stronger protections for reproductive decision-making.",
      "It also criticizes lawmakers who describe the issue as life-centered while declining to invest in broader systems that support children, schools, families, and health care.",
      "The piece concludes by calling for a constitutional amendment that would prevent future reversals and create a durable national protection for reproductive autonomy."
    ]
  },
  {
    id: "front-coke",
    title: "The Economics of Coca-Cola in Boston",
    author: "Samir Rubin",
    role: "Local Reporter",
    publisher: "Watertown Ledger",
    publisherLocation: "Watertown, MA",
    location: { state: "Massachusetts", code: "MA", city: "Watertown", county: "Middlesex County", lat: 42.37, lon: -71.18 },
    date: "2026-06-02",
    tags: ["Economy", "Consumer Prices", "Retail", "Boston", "Analysis"],
    parentTags: ["Economy"],
    articleType: ["Analysis", "Local News"],
    sentiment: "neutral",
    entities: ["Walmart", "Target", "Aldi", "Dollar General"],
    source: "Demo source",
    status: "published",
    image: imageGradients[3],
    summary: "A local price comparison uses a two-liter bottle of Coca-Cola to explain retail cost differences.",
    body: [
      "A comparison of two-liter Coca-Cola prices across five Boston-area retailers found an average price of $2.63, with the lowest observed price at $1.98 and the highest at $3.25.",
      "The variation is likely tied to store scale, delivery routes, rent, labor costs, and purchasing power. Larger retailers can often negotiate lower wholesale costs and spread fixed expenses across more transactions.",
      "Smaller or more centrally located stores face different pressures. Higher rent, more expensive labor, and less efficient deliveries can push prices upward even for identical products.",
      "The report uses the example to show how the law of one price often breaks down at street level, where geography and store economics shape what consumers actually pay."
    ]
  },
  {
    id: "front-mfa",
    title: "The Stolen Child at the MFA",
    author: "Michael Hart",
    role: "Freelance Art Critic",
    publisher: "Freelance",
    publisherLocation: "Boston, MA",
    location: { state: "Massachusetts", code: "MA", city: "Boston", county: "Suffolk County", lat: 42.36, lon: -71.06 },
    date: "2026-06-04",
    tags: ["Culture", "Museum", "Art Criticism", "History", "Opinion"],
    parentTags: ["Culture"],
    articleType: ["Opinion", "Culture"],
    sentiment: "reflective",
    entities: ["Museum of Fine Arts", "Cephas Giovanni Thompson"],
    source: "Demo source",
    status: "published",
    image: imageGradients[7],
    summary: "A museum essay reflects on a nineteenth-century painting and the stories it tells about captivity and representation.",
    body: [
      "The oil painting The Stolen Child, painted in 1845 by Cephas Giovanni Thompson, stands out in the American wing of the Museum of Fine Arts because it centers a scene of Native American life through the lens of nineteenth-century captivity narratives.",
      "The essay observes the details of the painting: a young girl near the water, trees that suggest symbolic contrast, and a background group that frames the scene as both isolated and culturally charged.",
      "The author reads the work as a complicated document of its time, one that reveals colonial fears and assumptions while also preserving traces of a wider cultural conflict.",
      "Ultimately, the essay treats the painting as a starting point for thinking about captivity, memory, representation, and how museums ask viewers to interpret inherited visual stories."
    ]
  },
  {
    id: "front-tax",
    title: "Tax Hike on the Horizon",
    author: "Alexa Morgan",
    role: "Local Student Reporter",
    publisher: "Cambridge Civic Review",
    publisherLocation: "Cambridge, MA",
    location: { state: "Massachusetts", code: "MA", city: "Cambridge", county: "Middlesex County", lat: 42.37, lon: -71.11 },
    date: "2026-06-01",
    tags: ["Government", "Local Budget", "Property Taxes", "Housing", "Cambridge"],
    parentTags: ["Government", "Housing"],
    articleType: ["Local News"],
    sentiment: "neutral",
    entities: ["Cambridge City Council", "Finance Committee"],
    source: "Demo source",
    status: "published",
    image: imageGradients[1],
    summary: "Cambridge's new budget crosses $1 billion and may require a residential property tax increase.",
    body: [
      "Cambridge officials approved a fiscal year 2027 budget exceeding $1 billion, a spending plan that will likely require a property tax increase of roughly seven percent this fall.",
      "The new budget reflects rising operating expenses, inflation pressures, lower commercial property values, and uncertainty in sectors that have long supported the city's tax base.",
      "City leaders praised the budget for maintaining services while scaling back some capital spending. Others questioned whether the plan does enough for low- and middle-income residents.",
      "The council will return to tax-rate decisions in September, when officials weigh how much of the city's revenue burden should shift toward residential property owners."
    ]
  }
];

const topicPool = [
  ["Government", "City Council", "Local Budget", "Public Meetings"],
  ["Housing", "Affordable Housing", "Rent Prices", "Zoning"],
  ["Education", "School Board", "Student Services", "Campus News"],
  ["Health", "Mental Health", "Rural Clinics", "Public Health"],
  ["Environment", "Water Quality", "Flooding", "Conservation"],
  ["Economy", "Small Business", "Consumer Prices", "Jobs"],
  ["Transportation", "Transit", "Road Repairs", "Traffic Safety"],
  ["Public Safety", "Emergency Services", "Courts", "Traffic Stops"],
  ["Culture", "Local Arts", "Museums", "Community Events"],
  ["Good News", "Volunteers", "Neighborhood Projects", "Youth Programs"]
];

const headlineTemplates = [
  "{city} council weighs {specific} plan after packed public hearing",
  "County residents debate {specific} as costs rise across {state}",
  "{publisher} tracks new questions around {specific}",
  "Local leaders in {city} seek regional answer to {specific}",
  "Students and families press for action on {specific}",
  "Small towns near {city} compare approaches to {specific}",
  "New grant gives {city} a chance to expand {specific}",
  "Advocates say {specific} is becoming a statewide pressure point",
  "{city} pilot program tests a different model for {specific}",
  "Regional survey finds voters focused on {specific}"
];

const publishers = ["County Ledger", "Valley Dispatch", "Campus Chronicle", "Civic Record", "Harbor Gazette", "Prairie Standard", "Mountain Review", "Neighborhood Times"];
const firstNames = ["Maya", "Noah", "Elena", "Caleb", "Priya", "Jonas", "Nadia", "Theo", "Rina", "Marcus", "Leah", "Owen"];
const lastNames = ["Reed", "Santos", "Kim", "Patel", "Brooks", "Walker", "Nguyen", "Carter", "Lewis", "Romero", "Foster", "Bell"];

function generateMockArticles() {
  const articles = [];
  let counter = 1;
  states.forEach(([state, code, baseLat, baseLon, cities], stateIndex) => {
    for (let i = 0; i < 10; i += 1) {
      const topic = topicPool[(stateIndex + i) % topicPool.length];
      const city = cities[i % cities.length];
      const publisherBase = publishers[(stateIndex + i) % publishers.length];
      const publisher = `${city} ${publisherBase}`;
      const specific = topic[1 + (i % (topic.length - 1))];
      const title = headlineTemplates[(counter + i) % headlineTemplates.length]
        .replace("{city}", city)
        .replace("{state}", state)
        .replace("{publisher}", publisher)
        .replace("{specific}", specific.toLowerCase());
      const lat = baseLat + ((i % 5) - 2) * 0.42 + ((stateIndex % 3) - 1) * 0.08;
      const lon = baseLon + ((Math.floor(i / 2) % 5) - 2) * 0.55 + ((stateIndex % 4) - 1.5) * 0.08;
      const author = `${firstNames[(counter + i) % firstNames.length]} ${lastNames[(stateIndex + i) % lastNames.length]}`;
      const date = new Date(Date.UTC(2026, 5, 8 - (i % 8) - (stateIndex % 5)));
      const tagSet = [topic[0], specific, topic[2], "Local News"];
      const isGood = topic[0] === "Good News";
      articles.push({
        id: `mock-${String(counter).padStart(3, "0")}`,
        title,
        author,
        role: i % 4 === 0 ? "Student Reporter" : "Local Reporter",
        publisher,
        publisherLocation: `${city}, ${code}`,
        location: { state, code, city, county: `${city} County`, lat, lon },
        date: date.toISOString().slice(0, 10),
        tags: isGood ? [...tagSet, "Good News"] : tagSet,
        parentTags: [topic[0]],
        articleType: isGood ? ["Good News", "Local News"] : ["Local News"],
        sentiment: isGood ? "positive" : "neutral",
        entities: [city, publisher, `${state} Department`],
        source: "Generated demo article",
        status: "published",
        image: imageGradients[counter % imageGradients.length],
        summary: `A generated local-news brief from ${city} showing how Breach can organize location, tags, source, and article type for map and search demos.`,
        body: [
          `Residents in ${city} are watching a developing local story around ${specific.toLowerCase()}, an issue that has started appearing in public meetings and neighborhood conversations across ${state}.`,
          `Officials and community groups described the matter as local in detail but familiar in shape: costs, access, staffing, and trust all affect how quickly the community can respond.`,
          `The ${publisher} reported that several residents asked for clearer timelines and more public updates. Local organizers said the next step is making sure smaller neighborhoods are included in the process.`,
          `For Breach News, this story is tagged under ${tagSet.slice(0, 3).join(", ")} so readers can compare how similar issues are being covered in other parts of the country.`
        ]
      });
      counter += 1;
    }
  });
  return articles;
}

const articles = [...promptArticles, ...generateMockArticles()];

const gameDays = [
  {
    date: "June 8, 2026",
    groups: {
      Connections: [
        { name: "Harbor Links", submitter: "Carter", location: "Portland, Maine", playable: true },
        { name: "Campus Commons", submitter: "Singh", location: "Madison, Wisconsin" },
        { name: "Main Street Mix", submitter: "Rivera", location: "Laredo, Texas" }
      ],
      "Spelling Bee": [
        { name: "Blue Ridge Hive", submitter: "Kim", location: "Asheville, North Carolina" },
        { name: "Prairie Letters", submitter: "Dawson", location: "Topeka, Kansas" }
      ],
      Sudoku: [
        { name: "Morning Grid", submitter: "Miller", location: "Boise, Idaho" },
        { name: "Civic Square", submitter: "Adams", location: "Columbus, Ohio" }
      ],
      Crossword: [
        { name: "The Local Mini", submitter: "Brooks", location: "Cambridge, Massachusetts" },
        { name: "Sunday County", submitter: "Flores", location: "Phoenix, Arizona" }
      ]
    }
  },
  {
    date: "June 7, 2026",
    groups: {
      Connections: [{ name: "Transit Transfer", submitter: "Ward", location: "Chicago, Illinois" }],
      "Spelling Bee": [{ name: "Soundside Seven", submitter: "Ellis", location: "Tacoma, Washington" }],
      Sudoku: [{ name: "Mineral Grid", submitter: "Hayes", location: "Reno, Nevada" }],
      Crossword: [{ name: "River Desk", submitter: "Nolan", location: "Cincinnati, Ohio" }]
    }
  },
  {
    date: "June 6, 2026",
    groups: {
      Connections: [{ name: "County Fair", submitter: "Green", location: "Fargo, North Dakota" }],
      "Spelling Bee": [{ name: "Depot Hive", submitter: "Price", location: "Savannah, Georgia" }],
      Sudoku: [{ name: "Capitol Grid", submitter: "Lee", location: "Sacramento, California" }],
      Crossword: [{ name: "Bridge Mini", submitter: "Stone", location: "Pittsburgh, Pennsylvania" }]
    }
  }
];

const connectionsPuzzle = {
  groups: [
    { name: "Newspaper Sections", words: ["Opinion", "Metro", "Sports", "Arts"] },
    { name: "Map Actions", words: ["Zoom", "Pan", "Filter", "Cluster"] },
    { name: "Public Meetings", words: ["Agenda", "Minutes", "Quorum", "Hearing"] },
    { name: "Good News Verbs", words: ["Restore", "Donate", "Mentor", "Rescue"] }
  ]
};

const state = {
  view: "home",
  searchOpen: false,
  searchMode: "keyword",
  searchTerm: "",
  article: null,
  menuOpen: false,
  loggedIn: false,
  showLogin: false,
  activeTemplate: "Article",
  formNotice: "",
  mapZoom: 1,
  mapPan: { x: 0, y: 0 },
  mapRegion: "United States",
  mapSearch: "",
  mapSelection: null,
  filterOpen: false,
  activeFilters: [],
  gamesEntered: false,
  openGame: "Harbor Links",
  selectedWords: [],
  solvedGroups: [],
  mistakes: 0,
  gameMessage: "",
  mobilePreview: false,
  refocusMapSearch: false,
  refocusSearch: false
};

const app = document.querySelector("#app");

function formatDate(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatToday() {
  return new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

function normalizeDateSearch(value) {
  const raw = value.trim();
  if (!raw) return "";
  const slashMatch = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/);
  if (slashMatch) {
    const month = Number(slashMatch[1]);
    const day = Number(slashMatch[2]);
    const year = Number(slashMatch[3].length === 2 ? `20${slashMatch[3]}` : slashMatch[3]);
    const date = new Date(Date.UTC(year, month - 1, day));
    if (date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day) {
      return date.toISOString().slice(0, 10);
    }
  }
  const parsed = new Date(raw.replace(/,/g, " "));
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  return raw.toLowerCase();
}

function searchByTag(tag) {
  state.searchOpen = true;
  state.searchMode = "tag";
  state.searchTerm = tag;
  state.article = null;
  state.menuOpen = false;
  state.view = "home";
  state.refocusSearch = true;
  render();
}

function topTags() {
  const counts = new Map();
  articles.forEach(article => article.parentTags.forEach(tag => counts.set(tag, (counts.get(tag) || 0) + 1)));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
}

function articlesForTag(tag) {
  return articles
    .filter(article => article.tags.includes(tag) || article.parentTags.includes(tag) || article.articleType.includes(tag))
    .sort((a, b) => b.date.localeCompare(a.date));
}

function searchResults() {
  const term = state.searchTerm.trim().toLowerCase();
  if (!term) return [];
  const normalizedDate = state.searchMode === "date" ? normalizeDateSearch(state.searchTerm) : "";
  return articles
    .filter(article => {
      if (state.searchMode === "date") {
        return article.date === normalizedDate ||
          article.date.includes(normalizedDate) ||
          formatDate(article.date).toLowerCase().includes(term) ||
          new Date(`${article.date}T00:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }).toLowerCase().includes(term);
      }
      if (state.searchMode === "location") return `${article.location.city} ${article.location.county} ${article.location.state}`.toLowerCase().includes(term);
      if (state.searchMode === "author") return article.author.toLowerCase().includes(term);
      if (state.searchMode === "tag") return [...article.tags, ...article.parentTags, ...article.articleType].join(" ").toLowerCase().includes(term);
      return `${article.title} ${article.summary} ${article.body.join(" ")} ${article.publisher}`.toLowerCase().includes(term);
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

function setView(view) {
  state.view = view;
  state.article = null;
  state.menuOpen = false;
  state.formNotice = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
}

function openArticle(articleId) {
  state.article = articles.find(article => article.id === articleId);
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
}

function setSearch(term) {
  state.searchTerm = term;
  state.article = null;
  render();
}

function navButton(view, label) {
  return `<button class="nav-button ${state.view === view ? "active" : ""}" data-view="${view}">${label}</button>`;
}

function renderHeader() {
  const modes = ["keyword", "date", "location", "author", "tag"];
  const sectionPages = ["Sports", "Politics", "Art", "Business", "Health", "Science", "Education", "Opinion"];
  const utilityPages = ["About Breach", "Support", "Subscription Model", "FAQ", "Contact", state.loggedIn ? "Signed in as user1" : "Account Login"];
  return `
    <header class="site-header">
      <div class="masthead">
        <div class="header-left">
          <button class="icon-button menu-toggle" data-action="toggle-menu" aria-label="Open sections menu">☰</button>
          <div class="today-date">${formatToday()}</div>
        </div>
        <div class="brand">
          <button data-view="home" aria-label="Go to Breach News homepage">Breach News</button>
          <div class="tagline">Democratizing Journalism</div>
        </div>
        <div class="header-spacer" aria-hidden="true"></div>
        <div class="masthead-lower">
          <nav class="primary-nav" aria-label="Primary navigation">
            ${navButton("home", "Home")}
            ${navButton("map", "Map")}
            ${navButton("video", "Video")}
            ${navButton("games", "Games")}
            ${navButton("submit", "Submit")}
          </nav>
          <div class="utility-nav">
            <button class="icon-button" data-action="toggle-search" aria-label="Toggle search">⌕</button>
          </div>
        </div>
      </div>
      ${state.menuOpen ? `
        <div class="menu-panel">
          <div class="menu-section">
            ${sectionPages.map(page => `<button data-menu-page="${page}">${page}</button>`).join("")}
          </div>
          <div class="menu-section menu-section-bottom">
            ${utilityPages.map(page => page === "Account Login" || page.startsWith("Signed") ? `<button data-action="show-login">${page}</button>` : `<button data-menu-page="${page}">${page}</button>`).join("")}
          </div>
        </div>
      ` : ""}
      ${state.searchOpen ? `
        <div class="search-strip">
          <div class="search-inner">
            <label class="search-box">
              <span>Search</span>
              <input value="${escapeHtml(state.searchTerm)}" placeholder="Search local journalism by keyword, location, tag, author, or date" data-action="search-input" />
            </label>
            <div class="search-modes">
              ${modes.map(mode => `<button class="mode-pill ${state.searchMode === mode ? "active" : ""}" data-search-mode="${mode}">${mode}</button>`).join("")}
            </div>
          </div>
        </div>
      ` : ""}
    </header>
  `;
}

function renderBottomNav() {
  return `
    <nav class="bottom-nav" aria-label="Mobile navigation">
      ${["home", "map", "video", "games", "submit"].map(view => `<button class="${state.view === view ? "active" : ""}" data-view="${view}">${view[0].toUpperCase() + view.slice(1)}</button>`).join("")}
    </nav>
  `;
}

function renderHome() {
  if (state.article) return renderArticle(state.article, "home");
  if (state.searchTerm.trim()) return renderSearch();
  const top = topTags().slice(0, 3).map(([tag]) => tag);
  const goodNews = articlesForTag("Good News").slice(0, 5);
  return `
    <main class="main-view">
      <div class="front-grid">
        <div>
          <div class="section-heading front-heading">
            <div>
              <div class="kicker">Front Page</div>
              <h2>Common Issues, Local Evidence</h2>
            </div>
            <p>Stories are grouped by shared civic questions so readers can compare what local papers are covering across the country.</p>
          </div>
          ${top.map((tag, index) => renderCarousel(tag, articlesForTag(tag).slice(0, 5), index)).join("")}
          ${renderCommonIssues()}
          <div class="section-heading">
            <div>
              <div class="kicker">Good News</div>
              <h2>Local wins worth finding</h2>
            </div>
            <p>Positive civic stories are tagged separately so they do not get buried under the week's harder news.</p>
          </div>
          <div class="carousel-track">
            ${goodNews.map(article => renderStoryCard(article, true)).join("")}
          </div>
        </div>
        <aside class="side-rail">
          <div class="rail-card">
            <div class="kicker">Submit</div>
            <h3>Bring a local story or puzzle into the review queue.</h3>
            <p>Templates unlock after the demo login, showing how future account-gated submissions will work.</p>
            <button class="submit-button" data-view="submit">Submit your own</button>
          </div>
          <div class="rail-card">
            <div class="kicker">Future CMS</div>
            <h3>Recommended: Payload CMS</h3>
            <p>Payload would fit articles, games, tags, review statuses, permissions, and a custom Next.js frontend.</p>
          </div>
        </aside>
      </div>
    </main>
  `;
}

function renderCarousel(tag, list, index) {
  const wrapList = list.length > 1 ? [list[list.length - 1], ...list, list[0]] : list;
  return `
    <section class="story-carousel">
      <div class="carousel-top">
        <div>
          <div class="kicker">Top Tag ${index + 1}</div>
          <h3>${tag}</h3>
        </div>
        <div class="carousel-controls">
          <button class="icon-button" data-scroll-carousel="-1" aria-label="Previous stories">‹</button>
          <button class="icon-button" data-scroll-carousel="1" aria-label="Next stories">›</button>
        </div>
      </div>
      <div class="carousel-track" data-carousel-track>
        ${wrapList.map(article => renderStoryCard(article)).join("")}
      </div>
    </section>
  `;
}

function renderStoryCard(article, compact = false) {
  return `
    <button class="story-card ${compact ? "compact" : ""}" style="--image-gradient:${article.image}" data-article="${article.id}">
      <div class="story-image"></div>
      <div class="story-content">
        <div class="kicker">${article.location.city}, ${article.location.code}</div>
        <h3>${article.title}</h3>
        <div class="meta-line">${article.publisher} · ${formatDate(article.date)}</div>
      </div>
    </button>
  `;
}

function renderCommonIssues() {
  const tags = topTags().slice(0, 6);
  return `
    <section>
      <div class="section-heading">
        <div>
          <div class="kicker">Common Issues</div>
          <h2>Compare coverage by topic</h2>
        </div>
        <p>Each topic opens a chronological article list from multiple localities.</p>
      </div>
      <div class="common-grid">
        ${tags.map(([tag, count]) => `
          <article class="common-card">
            <button data-topic="${tag}">
              <div class="kicker">${count} demo articles</div>
              <h3>${tag}</h3>
              <p>${issueCopy(tag)}</p>
            </button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function issueCopy(tag) {
  const copy = {
    Government: "Budgets, councils, public meetings, and the decisions that shape daily civic life.",
    Economy: "Consumer prices, small businesses, labor, and how national pressure shows up locally.",
    Housing: "Rent, zoning, building plans, and the affordability questions facing different cities.",
    Education: "School boards, campus newspapers, student needs, and local education budgets.",
    Health: "Clinics, mental health, public health, and local care access.",
    Environment: "Water, land, weather, infrastructure, and conservation stories."
  };
  return copy[tag] || "A cross-country thread of local reporting organized for direct comparison.";
}

function renderTags(tags) {
  return `<div class="tag-row">${tags.map(tag => `<button class="tag-pill" style="--tag-color:${tagColors[tag] || tagColors["Local News"]}" data-tag-search="${tag}">${tag}</button>`).join("")}</div>`;
}

function renderSearch() {
  const results = searchResults();
  return `
    <main class="main-view">
      <div class="section-heading">
        <div>
          <div class="kicker">Search Results</div>
          <h2>${results.length ? `${results.length} matches` : "Nothing came up"}</h2>
        </div>
        <button class="plain-button" data-action="clear-search">← Back to front page</button>
      </div>
      ${results.length ? `
        <div class="result-list">
          ${results.slice(0, 60).map(article => `
            <article class="result-item">
              <button class="result-title" data-article="${article.id}">
                <h3>${article.title}</h3>
                <div class="meta-line">${formatDate(article.date)} · ${article.location.city}, ${article.location.code} · ${article.author} · ${article.publisher}</div>
                <p>${article.summary}</p>
              </button>
              ${renderTags(article.tags.slice(0, 4))}
            </article>
          `).join("")}
        </div>
      ` : `<div class="empty-state">No articles matched that ${state.searchMode}. Try another search mode or a broader word.</div>`}
    </main>
  `;
}

function renderArticle(article, returnView) {
  return `
    <main class="main-view">
      <article class="article-reader">
        <div class="article-hero" style="--image-gradient:${article.image}">
          <div>
            <div class="kicker">${article.location.city}, ${article.location.code}</div>
            <h1>${article.title}</h1>
            <div class="meta-line">By ${article.author}, ${article.role} · ${article.publisher} · ${formatDate(article.date)}</div>
          </div>
        </div>
        <div class="article-sticky">
          <button class="plain-button" data-view="${returnView}">← Return to ${returnView === "map" ? "map" : "front page"}</button>
          <button class="icon-button" data-action="mock-share" aria-label="Share article">↗</button>
        </div>
        <div class="article-body">
          ${renderTags(article.tags)}
          <p><strong>Summary:</strong> ${article.summary}</p>
          ${article.body.map(paragraph => `<p>${paragraph}</p>`).join("")}
          <p><strong>Source:</strong> ${article.source}. This demo treats sample and generated pieces as prototype content, not live factual reporting.</p>
        </div>
      </article>
    </main>
  `;
}

function project(lon, lat) {
  const x = ((lon + 125) / 58.5) * 100;
  const y = ((50.2 - lat) / 25.8) * 100;
  return { x: Math.max(2, Math.min(98, x)), y: Math.max(5, Math.min(95, y)) };
}

function clusterLevel() {
  if (state.mapZoom > 2.25) return "article";
  if (state.mapZoom > 1.45) return "city";
  return "state";
}

function clusteredArticles() {
  const map = new Map();
  const level = clusterLevel();
  const mapTerm = state.mapSearch.trim().toLowerCase();
  const filtered = articles.filter(article => {
    if (!state.activeFilters.length) return true;
    const haystack = [...article.tags, ...article.parentTags, article.publisher, article.location.state, article.location.city].join(" ");
    return state.activeFilters.every(filter => haystack.includes(filter));
  }).filter(article => {
    if (!mapTerm) return true;
    return `${article.location.city} ${article.location.county} ${article.location.state} ${article.location.code}`.toLowerCase().includes(mapTerm);
  });
  filtered.forEach(article => {
    const key = level === "article" ? article.id : level === "city" ? `${article.location.city}, ${article.location.code}` : article.location.state;
    if (!map.has(key)) {
      map.set(key, {
        key,
        label: level === "article" ? article.title : key,
        level,
        latTotal: 0,
        lonTotal: 0,
        articles: []
      });
    }
    const cluster = map.get(key);
    cluster.latTotal += article.location.lat;
    cluster.lonTotal += article.location.lon;
    cluster.articles.push(article);
  });
  return [...map.values()]
    .map(cluster => ({
      ...cluster,
      lat: cluster.latTotal / cluster.articles.length,
      lon: cluster.lonTotal / cluster.articles.length
    }))
    .sort((a, b) => b.articles.length - a.articles.length);
}

function renderUsOutline() {
  return `
    <svg class="us-map" viewBox="0 0 1000 620" aria-hidden="true" focusable="false">
      <path class="us-land" d="M85 235 L126 185 L176 169 L231 138 L318 126 L397 136 L472 120 L555 145 L642 148 L730 178 L811 218 L883 292 L871 350 L826 373 L762 368 L718 402 L682 456 L610 461 L540 503 L461 488 L391 514 L326 488 L276 438 L219 425 L164 394 L113 344 L72 304 Z" />
      <path class="us-coast" d="M124 187 C150 243 130 285 85 235 M231 138 C237 196 217 236 176 270 M397 136 C389 210 409 260 455 287 M642 148 C612 212 617 263 674 303 M883 292 C802 305 760 338 718 402 M540 503 C555 446 538 407 492 383 M276 438 C338 413 367 373 356 318" />
      <path class="us-water" d="M730 178 C773 238 805 275 871 350" />
    </svg>
  `;
}

function renderMap() {
  if (state.article) return renderArticle(state.article, "map");
  const clusters = clusteredArticles();
  let selected = state.mapSelection ? clusters.find(cluster => cluster.key === state.mapSelection) : clusters[0];
  if (!selected && clusters[0]) {
    selected = clusters[0];
    state.mapSelection = selected.key;
  }
  if (!state.mapSelection && selected) state.mapSelection = selected.key;
  const filterTags = topTags().slice(0, 8).map(([tag]) => tag);
  const levelLabel = clusterLevel() === "state" ? "state clusters" : clusterLevel() === "city" ? "city clusters" : "story points";
  return `
    <main class="main-view">
      <div class="section-heading">
        <div>
          <div class="kicker">Map</div>
          <h2>Explore the country by local coverage</h2>
        </div>
        <p>Dots represent ${levelLabel}. Larger and warmer signals mean more demo stories from that place.</p>
      </div>
      <div class="map-layout map-zoom-${clusterLevel()}">
        <section class="map-stage" aria-label="Interactive United States map demo">
          <div class="map-tools">
            <button class="icon-button" data-map-zoom="in" aria-label="Zoom in">+</button>
            <button class="icon-button" data-map-zoom="out" aria-label="Zoom out">−</button>
            <label class="map-search">
              <span>Search</span>
              <input value="${escapeHtml(state.mapSearch)}" placeholder="City or state" data-action="map-search-input">
            </label>
            <button class="plain-button" data-action="toggle-filter">Filters</button>
          </div>
          <div class="map-canvas" style="transform: scale(${state.mapZoom}) translate(${state.mapPan.x}px, ${state.mapPan.y}px)">
            <div class="radio-rings" aria-hidden="true"></div>
            ${renderUsOutline()}
            ${states.filter((_, i) => i % 4 === 0).map(([name, code, lat, lon]) => {
              const point = project(lon, lat);
              return `<span class="map-label" style="left:${point.x}%;top:${point.y}%">${code}</span>`;
            }).join("")}
            ${clusters.map(cluster => {
              const point = project(cluster.lon, cluster.lat);
              return `<button class="map-dot ${state.mapSelection === cluster.key ? "active" : ""}" style="left:${point.x}%;top:${point.y}%;--count:${cluster.articles.length};--heat:${Math.min(cluster.articles.length, 18)}" data-cluster="${cluster.key}" aria-label="${cluster.label}, ${cluster.articles.length} articles"></button>`;
            }).join("")}
          </div>
          <div class="map-location">Looking at: <strong>${state.mapRegion}</strong></div>
          ${state.filterOpen ? `
            <div class="filter-panel">
              <strong>Map filters</strong>
              <div class="filter-options">
                ${filterTags.map(tag => `<label><input type="checkbox" data-filter="${tag}" ${state.activeFilters.includes(tag) ? "checked" : ""}> ${tag}</label>`).join("")}
              </div>
            </div>
          ` : ""}
        </section>
        ${renderMapSide(selected)}
      </div>
    </main>
  `;
}

function renderMapSide(cluster) {
  if (!cluster) {
    return `<aside class="map-side info-panel"><header><h2>No region selected</h2></header></aside>`;
  }
  const list = cluster.articles.sort((a, b) => b.date.localeCompare(a.date));
  return `
    <aside class="map-side info-panel open">
      <header>
        <div class="kicker">${list.length} article cluster</div>
        <h2>${cluster.key}</h2>
        <p class="meta-line">Showing 6 before scrolling, newest first.</p>
      </header>
      <div class="map-list">
        ${list.map(article => `
          <article class="map-list-item">
            <button class="result-title" data-article="${article.id}">
              <h4>${article.title}</h4>
              <div class="meta-line">${formatDate(article.date)} · ${article.publisher}</div>
              <p>${article.summary}</p>
            </button>
            ${renderTags(article.tags.slice(0, 3))}
          </article>
        `).join("")}
      </div>
    </aside>
  `;
}

function renderVideo() {
  return `
    <main class="main-view">
      <section class="video-page">
        <div class="section-heading">
          <div>
            <div class="kicker">Video</div>
            <h2>Local reporting, in motion</h2>
          </div>
          <p>A placeholder page for short explainers, reporter standups, and future community video packages.</p>
        </div>
        <div class="video-stage">
          <div class="video-frame">
            <div class="play-button" aria-hidden="true">▶</div>
            <h3>Featured Breach Video</h3>
            <p>Demo placeholder: video player, captions, transcript, and related local articles will live here.</p>
          </div>
          <aside class="video-rail">
            ${articles.slice(0, 4).map(article => `
              <button class="video-link" data-article="${article.id}">
                <span>${article.location.city}, ${article.location.code}</span>
                <strong>${article.title}</strong>
              </button>
            `).join("")}
          </aside>
        </div>
      </section>
    </main>
  `;
}

function renderGames() {
  if (!state.gamesEntered) {
    return `
      <main class="main-view">
        <section class="games-cover">
          <div>
            <div class="kicker">Games</div>
            <h1>Play the local desk.</h1>
            <p>Community-made puzzles, daily leaderboards, and submitter credits will live in one dedicated games hub.</p>
            <div class="tag-row">
              <button class="submit-button" data-action="enter-games">Enter Games</button>
              <button class="ghost-button" data-view="submit">Submit a Puzzle</button>
            </div>
          </div>
        </section>
      </main>
    `;
  }
  return `
    <main class="main-view">
      <div class="section-heading">
        <div>
          <div class="kicker">Games</div>
          <h2>Games Hub</h2>
        </div>
        <div class="tag-row">
          <button class="ghost-button" data-action="exit-games">Cover</button>
          <button class="submit-button" data-view="submit">Submit your own</button>
        </div>
      </div>
      <div class="games-hub">
        <aside class="leaderboard-panel">
          <div class="kicker">Leaderboards</div>
          ${["Connections", "Spelling Bee", "Sudoku", "Crossword"].map(type => `
            <section class="leaderboard-block">
              <h3>${type}</h3>
              <div class="leaderboard">
                ${mockLeaders(type).map((leader, index) => `<div><span>${index + 1}. ${leader.name} · ${leader.state}</span><span>${leader.time}</span></div>`).join("")}
              </div>
            </section>
          `).join("")}
        </aside>
        <div class="games-feed">
          ${gameDays.map(day => `
            <section class="game-day">
              <header>
                <h3>${day.date}</h3>
                <div class="meta-line">Most recent batch, sorted by game type</div>
              </header>
              ${Object.entries(day.groups).map(([type, games]) => `
                <div class="game-group">
                  <h3>${type}</h3>
                  ${games.map(game => `
                    <div class="game-row">
                      <button class="plain-button" data-open-game="${game.name}">${game.name}</button>
                      <div class="meta-line">Submitted by ${game.submitter}, ${game.location}</div>
                      ${state.openGame === game.name ? renderGamePanel(type, game) : ""}
                    </div>
                  `).join("")}
                </div>
              `).join("")}
            </section>
          `).join("")}
        </div>
      </div>
    </main>
  `;
}

function mockLeaders(type) {
  return [
    { name: "user1", state: "MA", time: type === "Connections" ? "1:42 avg" : "3 day streak" },
    { name: "civicdesk", state: "TX", time: "2:10 avg" },
    { name: "localreader", state: "OR", time: "2:45 avg" }
  ];
}

function renderGamePanel(type, game) {
  if (type === "Connections" && game.playable) return renderConnections();
  return `
    <div class="game-play">
      <div class="notice">Polished demo mockup: timer, leaderboard, saved progress, and share result are shown visually for this prototype.</div>
      ${type === "Sudoku" ? renderSudokuMock() : type === "Spelling Bee" ? renderBeeMock() : renderCrosswordMock()}
    </div>
  `;
}

function shuffledWords() {
  return connectionsPuzzle.groups.flatMap(group => group.words).sort();
}

function renderConnections() {
  return `
    <div class="game-play">
      <div class="section-heading">
        <div>
          <div class="kicker">Playable Demo</div>
          <h3>Connections: Harbor Links</h3>
        </div>
        <p>Timer 00:00 · Mistakes ${state.mistakes}/4</p>
      </div>
      ${state.solvedGroups.map(group => `<div class="solved-group"><strong>${group.name}</strong><br>${group.words.join(", ")}</div>`).join("")}
      <div class="connections-grid">
        ${shuffledWords().map(word => {
          const solved = state.solvedGroups.some(group => group.words.includes(word));
          return `<button class="word-tile ${state.selectedWords.includes(word) ? "selected" : ""} ${solved ? "solved" : ""}" data-word="${word}" ${solved ? "disabled" : ""}>${word}</button>`;
        }).join("")}
      </div>
      <div class="tag-row">
        <button class="submit-button" data-action="submit-connections">Submit group</button>
        <button class="ghost-button" data-action="reset-connections">Reset</button>
        <button class="ghost-button" data-action="mock-share">Share result</button>
      </div>
      ${state.gameMessage ? `<p class="notice">${state.gameMessage}</p>` : ""}
    </div>
  `;
}

function renderSudokuMock() {
  return `<div style="display:grid;grid-template-columns:repeat(9,1fr);max-width:22rem">${Array.from({ length: 81 }, (_, i) => `<div style="aspect-ratio:1;border:1px solid var(--line);display:grid;place-items:center;background:${i % 4 === 0 ? "rgba(155,217,239,.14)" : "rgba(233,246,255,.05)"}">${i % 4 === 0 ? ((i % 9) + 1) : ""}</div>`).join("")}</div>`;
}

function renderBeeMock() {
  return `<div style="display:grid;grid-template-columns:repeat(3,4.5rem);gap:.4rem;justify-content:start">${["B","R","E","A","C","H","S"].map((l, i) => `<div style="height:4.5rem;clip-path:polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%);background:${i === 3 ? "var(--gold)" : "rgba(155,217,239,.24)"};display:grid;place-items:center;font-weight:800">${l}</div>`).join("")}</div>`;
}

function renderCrosswordMock() {
  return `<div style="display:grid;grid-template-columns:repeat(7,2.4rem);max-width:18rem">${Array.from({ length: 49 }, (_, i) => `<div style="aspect-ratio:1;border:1px solid var(--line);background:${[3,11,12,24,31,39].includes(i) ? "#0b0711" : "rgba(233,246,255,.08)"}"></div>`).join("")}</div>`;
}

function renderSubmit() {
  return `
    <main class="main-view">
      <div class="section-heading">
        <div>
          <div class="kicker">Submissions</div>
          <h2>Send local journalism or games for review</h2>
        </div>
        ${state.loggedIn ? `<span class="tag-pill">Signed in as user1</span>` : `<button class="submit-button" data-action="show-login">Log in to unlock</button>`}
      </div>
      ${!state.loggedIn ? `
        <div class="locked-panel">
          <h3>Templates are locked for anonymous visitors.</h3>
          <p>Browse freely. To submit a story or game in this demo, use the fake login and templates will appear.</p>
          <button class="submit-button" data-action="show-login">Log in as user1</button>
        </div>
      ` : `
        <div class="submit-layout">
          <aside class="form-panel">
            <div class="kicker">Templates</div>
            <div class="template-tabs">
              ${["Article", "Connections", "Spelling Bee", "Sudoku", "Crossword"].map(name => `<button class="nav-button ${state.activeTemplate === name ? "active" : ""}" data-template="${name}">${name}</button>`).join("")}
            </div>
            <div class="notice">Draft legal-style copy: selected submissions may receive compensation after editorial review. Final legal terms would be drafted separately.</div>
          </aside>
          <section class="form-panel">
            ${state.formNotice ? `<div class="notice">${state.formNotice}</div>` : ""}
            ${renderTemplateForm(state.activeTemplate)}
          </section>
        </div>
      `}
    </main>
  `;
}

function renderTemplateForm(template) {
  const common = `
    <div class="field"><label>Your email</label><input placeholder="name@example.com"></div>
    <div class="field"><label>Display name</label><input placeholder="Last name or byline"></div>
    <div class="field"><label>Location</label><input placeholder="City, State"></div>
  `;
  if (template === "Article") {
    return `
      <h3>Article Template</h3>
      <div class="field-grid">
        ${common}
        <div class="field"><label>Publisher</label><input placeholder="Paper name or freelance"></div>
        <div class="field"><label>Date</label><input type="date"></div>
        <div class="field full"><label>Headline</label><input placeholder="Story headline"></div>
        <div class="field full"><label>Article body</label><textarea placeholder="Paste the full article here"></textarea></div>
        <div class="field full"><label>Sources and citations</label><textarea placeholder="List sources clearly"></textarea></div>
      </div>
      <button class="submit-button" data-action="submit-form">Submit for review</button>
    `;
  }
  if (template === "Connections") {
    return `
      <h3>Connections Template</h3>
      <div class="field-grid">
        ${common}
        ${[1,2,3,4].map(i => `<div class="field full"><label>Group ${i} theme and four words</label><input placeholder="Theme: word, word, word, word"></div>`).join("")}
      </div>
      <button class="submit-button" data-action="submit-form">Submit for review</button>
    `;
  }
  if (template === "Spelling Bee") {
    return `
      <h3>Spelling Bee Template</h3>
      <div class="field-grid">
        ${common}
        <div class="field"><label>Center letter</label><input maxlength="1"></div>
        <div class="field"><label>Outer letters</label><input placeholder="Six letters"></div>
        <div class="field full"><label>Answer key</label><textarea placeholder="Accepted words"></textarea></div>
      </div>
      <button class="submit-button" data-action="submit-form">Submit for review</button>
    `;
  }
  if (template === "Sudoku") {
    return `
      <h3>Sudoku Template</h3>
      <div class="field-grid">
        ${common}
        <div class="field full"><label>Starting clues</label><textarea placeholder="Use 0 or . for blanks"></textarea></div>
        <div class="field full"><label>Solved grid</label><textarea placeholder="Completed answer grid"></textarea></div>
      </div>
      <button class="submit-button" data-action="submit-form">Submit for review</button>
    `;
  }
  return `
    <h3>Crossword Template</h3>
    <div class="field-grid">
      ${common}
      <div class="field full"><label>Across clues and answers</label><textarea placeholder="1A. clue = ANSWER"></textarea></div>
      <div class="field full"><label>Down clues and answers</label><textarea placeholder="1D. clue = ANSWER"></textarea></div>
      <div class="field full"><label>Grid notes</label><textarea placeholder="Optional placement notes"></textarea></div>
    </div>
    <button class="submit-button" data-action="submit-form">Submit for review</button>
  `;
}

function renderLoginModal() {
  if (!state.showLogin) return "";
  return `
    <div class="modal-backdrop">
      <div class="modal">
        <h2>Demo Login</h2>
        <p class="meta-line">No real authentication. Click log in to become user1 and unlock templates.</p>
        <div class="field"><label>Username</label><input placeholder="optional"></div>
        <div class="field"><label>Password</label><input type="password" placeholder="optional"></div>
        <div class="tag-row">
          <button class="submit-button" data-action="login">Log in</button>
          <button class="ghost-button" data-action="hide-login">Cancel</button>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div>
        <strong>Legal placeholder</strong>
        <span>Terms, privacy policy, copyright notices, submission rules, compensation terms, accessibility statement, and other required legal specifications will be added here.</span>
      </div>
    </footer>
  `;
}

function renderMobileToggle() {
  return `<button class="mobile-preview-toggle ${state.mobilePreview ? "active" : ""}" data-action="toggle-mobile-preview">${state.mobilePreview ? "Exit mobile view" : "Mobile viewing mode"}</button>`;
}

function render() {
  const view = state.view === "map" ? renderMap() : state.view === "video" ? renderVideo() : state.view === "games" ? renderGames() : state.view === "submit" ? renderSubmit() : renderHome();
  app.innerHTML = `
    <div class="app-shell ${state.mobilePreview ? "mobile-preview" : ""}">
      ${renderHeader()}
      ${view}
      ${renderFooter()}
      ${renderBottomNav()}
      ${renderLoginModal()}
      ${renderMobileToggle()}
    </div>
  `;
  app.querySelectorAll("[data-carousel-track]").forEach(track => {
    if (!track.dataset.initialized && track.children.length > 2) {
      const firstReal = track.children[1];
      track.scrollLeft = firstReal.offsetLeft - track.offsetLeft;
      track.dataset.initialized = "true";
    }
  });
  if (state.refocusSearch) {
    state.refocusSearch = false;
    const input = app.querySelector("[data-action='search-input']");
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }
  if (state.refocusMapSearch) {
    state.refocusMapSearch = false;
    const input = app.querySelector("[data-action='map-search-input']");
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function handleClick(event) {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) return setView(viewButton.dataset.view);

  const tagSearch = event.target.closest("[data-tag-search]");
  if (tagSearch) return searchByTag(tagSearch.dataset.tagSearch);

  const articleButton = event.target.closest("[data-article]");
  if (articleButton) return openArticle(articleButton.dataset.article);

  const menuPage = event.target.closest("[data-menu-page]");
  if (menuPage) {
    state.menuOpen = false;
    state.searchTerm = menuPage.dataset.menuPage;
    state.searchMode = "keyword";
    return render();
  }

  const topic = event.target.closest("[data-topic]");
  if (topic) {
    state.searchOpen = true;
    state.searchMode = "tag";
    state.searchTerm = topic.dataset.topic;
    return render();
  }

  const mode = event.target.closest("[data-search-mode]");
  if (mode) {
    state.searchMode = mode.dataset.searchMode;
    return render();
  }

  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "toggle-search") {
    state.searchOpen = !state.searchOpen;
    state.refocusSearch = state.searchOpen;
    return render();
  }
  if (action === "toggle-mobile-preview") {
    state.mobilePreview = !state.mobilePreview;
    return render();
  }
  if (action === "toggle-menu") {
    state.menuOpen = !state.menuOpen;
    return render();
  }
  if (action === "clear-search") {
    state.searchTerm = "";
    return render();
  }
  if (action === "mock-share") {
    state.formNotice = "Share link copied in the production version. This demo shows the sharing affordance only.";
    state.gameMessage = "Share result copied in the production version.";
    return render();
  }
  if (action === "show-login") {
    state.showLogin = true;
    state.menuOpen = false;
    return render();
  }
  if (action === "hide-login") {
    state.showLogin = false;
    return render();
  }
  if (action === "login") {
    state.loggedIn = true;
    state.showLogin = false;
    state.view = "submit";
    return render();
  }
  if (action === "submit-form") {
    state.formNotice = `${state.activeTemplate} template submitted for mock review. The form has been cleared and no data was saved.`;
    return render();
  }
  if (action === "toggle-filter") {
    state.filterOpen = !state.filterOpen;
    return render();
  }
  if (action === "enter-games") {
    state.gamesEntered = true;
    return render();
  }
  if (action === "exit-games") {
    state.gamesEntered = false;
    return render();
  }
  if (action === "submit-connections") return submitConnections();
  if (action === "reset-connections") return resetConnections();

  const scrollCarousel = event.target.closest("[data-scroll-carousel]");
  if (scrollCarousel) {
    const track = scrollCarousel.closest(".story-carousel")?.querySelector("[data-carousel-track]");
    if (!track) return;
    const direction = Number(scrollCarousel.dataset.scrollCarousel);
    const step = track.querySelector(".story-card")?.getBoundingClientRect().width || 320;
    track.scrollBy({ left: direction * (step + 18), behavior: "smooth" });
    setTimeout(() => {
      const max = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft <= 4) track.scrollLeft = max - step * 1.5;
      if (track.scrollLeft >= max - 4) track.scrollLeft = step;
    }, 320);
  }

  const zoom = event.target.closest("[data-map-zoom]");
  if (zoom) {
    state.mapZoom = zoom.dataset.mapZoom === "in" ? Math.min(2.8, state.mapZoom + 0.35) : Math.max(1, state.mapZoom - 0.35);
    state.mapSelection = null;
    return render();
  }

  const cluster = event.target.closest("[data-cluster]");
  if (cluster) {
    state.mapSelection = cluster.dataset.cluster;
    state.mapRegion = cluster.dataset.cluster;
    return render();
  }

  const openGame = event.target.closest("[data-open-game]");
  if (openGame) {
    state.openGame = state.openGame === openGame.dataset.openGame ? "" : openGame.dataset.openGame;
    return render();
  }

  const word = event.target.closest("[data-word]");
  if (word) return toggleWord(word.dataset.word);

  const template = event.target.closest("[data-template]");
  if (template) {
    state.activeTemplate = template.dataset.template;
    state.formNotice = "";
    return render();
  }
}

function handleInput(event) {
  if (event.target.matches("[data-action='search-input']")) {
    state.searchTerm = event.target.value;
    state.refocusSearch = true;
    render();
  }
  if (event.target.matches("[data-action='map-search-input']")) {
    state.mapSearch = event.target.value;
    state.mapSelection = null;
    state.mapRegion = state.mapSearch.trim() || "United States";
    state.refocusMapSearch = true;
    render();
  }
  if (event.target.matches("[data-filter]")) {
    const tag = event.target.dataset.filter;
    if (event.target.checked && !state.activeFilters.includes(tag)) state.activeFilters.push(tag);
    if (!event.target.checked) state.activeFilters = state.activeFilters.filter(item => item !== tag);
    state.mapSelection = null;
    render();
  }
}

function toggleWord(word) {
  if (state.selectedWords.includes(word)) {
    state.selectedWords = state.selectedWords.filter(item => item !== word);
  } else if (state.selectedWords.length < 4) {
    state.selectedWords.push(word);
  }
  state.gameMessage = "";
  render();
}

function submitConnections() {
  if (state.selectedWords.length !== 4) {
    state.gameMessage = "Select exactly four words.";
    return render();
  }
  const match = connectionsPuzzle.groups.find(group =>
    group.words.every(word => state.selectedWords.includes(word)) &&
    !state.solvedGroups.some(solved => solved.name === group.name)
  );
  if (match) {
    state.solvedGroups.push(match);
    state.selectedWords = [];
    state.gameMessage = state.solvedGroups.length === 4 ? "Solved. Share result is mocked for the demo." : "Correct group locked.";
  } else {
    state.mistakes += 1;
    state.selectedWords = [];
    state.gameMessage = "Not quite. Try another grouping.";
  }
  render();
}

function resetConnections() {
  state.selectedWords = [];
  state.solvedGroups = [];
  state.mistakes = 0;
  state.gameMessage = "";
  render();
}

app.addEventListener("click", handleClick);
app.addEventListener("input", handleInput);
render();

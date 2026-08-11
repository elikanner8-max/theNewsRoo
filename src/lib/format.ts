export const formatViews = (views: number) =>
	views >= 1000 ? `${(views / 1000).toFixed(1)}k` : `${views}`;

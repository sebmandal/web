// general
import indexGet from "../routes/index/get";

// blog
import blogGet from "../routes/blog/get";
import blogPost from "../routes/blog/post";
import blogPostGet from "../routes/blog/post/get";
import blogDashboardGet from "../routes/blog/dashboard/get";
import blogDashboardPost from "../routes/blog/dashboard/post";
import blogDashboardEditGet from "../routes/blog/dashboard/edit/get";
import blogDashboardEditPost from "../routes/blog/dashboard/edit/post";

// redirect
import mandoRedirect from "../routes/redirects/mando";
import teboneRedirect from "../routes/redirects/tebone";
import CompRedirect from "../routes/redirects/competent";
import GitHubRedirect from "../routes/redirects/github";

export default {
	//index
	indexGet,

	//blog
	blogGet,
	blogPost,

	//specific blog post
	blogPostGet,

	//blog dashboard
	blogDashboardGet,
	blogDashboardPost,

	//editing a specific blog post
	blogDashboardEditGet,
	blogDashboardEditPost,

	//redirect
	mandoRedirect,
	teboneRedirect,
	CompRedirect,
	GitHubRedirect,
};

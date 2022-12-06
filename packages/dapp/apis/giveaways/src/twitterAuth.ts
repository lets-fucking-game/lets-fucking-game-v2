import { UserKV } from "./kv";

// await UserKV.getUser(userId);
// const userData = ....
// UserKV.saveUser(userId, userData);

// Github secrets
const client_id = TWITTER_CLIENT_ID;
const client_secret = TWITTER_CLIENT_SECRET;

// TODO follow those steps :
// Twitter login steps : https://developer.twitter.com/en/docs/authentication/guides/log-in-with-twitter
// Twitter typescript official SDK : https://github.com/twitterdev/twitter-api-typescript-sdk
// OTHER RESOURCES
// STEP 1 : https://developer.twitter.com/en/docs/authentication/api-reference/request_token
// STEP 2 : https://developer.twitter.com/en/docs/authentication/api-reference/authorize

// Example to load token https://github.com/twitterdev/Twitter-API-v2-sample-code/blob/main/Tweet-Lookup/get_tweets_with_user_context.js
export const twitterAuth = async (request) => {
	// handle CORS pre-flight request
	if (request.method === "OPTIONS") {
		return new Response(null, {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type",
			},
		});
	}

	// redirect GET requests to the OAuth login page on github.com
	if (request.method === "GET") {
		return Response.redirect(
			`https://api.twitter.com/oauth/authorize?client_id=${client_id}`,
			302
		);
	}

	try {
		const { code } = await request.json();

		const response = await fetch(
			"https://github.com/login/oauth/access_token",
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
					"user-agent": "cloudflare-worker-github-oauth-login-demo",
					accept: "application/json",
				},
				body: JSON.stringify({ client_id, client_secret, code }),
			}
		);
		const result = await response.json();

		const headers = {
			"Access-Control-Allow-Origin": "*",
		};

		if (result.error) {
			return new Response(JSON.stringify({ response: 1, result: result }), {
				status: 401,
				headers,
			});
		}

		const response2 = await fetch("https://api.github.com/user/emails", {
			headers: {
				accept: "application/vnd.github.v3+json",
				"user-agent": "cloudflare-worker-github-oauth-login-demo",
				authorization: `token ${result.access_token}`,
			},
		});

		const result2 = await response2.json();
		if (result2.error) {
			return new Response(JSON.stringify({ response: 2, result: result2 }), {
				status: 401,
				headers,
			});
		}
		// const primaryEmail = result2.filter((e) => e.primary && e.verified);
		// if (!primaryEmail || primaryEmail.length === 0) {
		// 	return new Response(
		// 		JSON.stringify({ message: "No email attached to Github user." }),
		// 		{ status: 401, headers }
		// 	);
		// }

		return new Response(JSON.stringify(result2), {
			status: 201,
			headers,
		});
	} catch (error) {
		console.error(error);
		return new Response(error.message, {
			status: 500,
		});
	}
};

/*const tweet = {
    "created_at": "Thu Apr 19 02:28:49 +0000 2018",
    "id": 986793713484599300,
    "id_str": "986793713484599296",
    "text": "Reason number 429648691 that people don’t speak about their mental illness/health conditions or get help. \n\nThis is… https://t.co/cD5zer9EVs",
    "truncated": true,
    "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": [{
            "url": "https://t.co/cD5zer9EVs",
            "expanded_url": "https://twitter.com/i/web/status/986793713484599296",
            "display_url": "twitter.com/i/web/status/9…",
            "indices": [117, 140]
        }]
    },
    "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
    },
    "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
        "id": 225970038,
        "id_str": "225970038",
        "name": "George M Johnson",
        "screen_name": "IamGMJohnson",
        "location": "Brooklyn, NY",
        "description": "Journalist and Activist iamgmjohnson@gmail Features in ET, NBC, TeenVogue, TheGrio, CassiusLife, TheRoot, & Black Youth Project. Book rep’d by @Ericsmithrocks",
        "url": "https://t.co/MKhqk1ooJN",
        "entities": {
            "url": {
                "urls": [{
                    "url": "https://t.co/MKhqk1ooJN",
                    "expanded_url": "http://georgemjohnson.contently.com",
                    "display_url": "georgemjohnson.contently.com",
                    "indices": [0, 23]
                }]
            },
            "description": {
                "urls": []
            }
        },
        "protected": false,
        "followers_count": 15687,
        "friends_count": 1352,
        "listed_count": 725,
        "created_at": "Sun Dec 12 23:44:34 +0000 2010",
        "favourites_count": 41263,
        "utc_offset": -18000,
        "time_zone": "Central Time (US & Canada)",
        "geo_enabled": true,
        "verified": true,
        "statuses_count": 56870,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "C0DEED",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/986706359801516032/jaeoQnMI_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/986706359801516032/jaeoQnMI_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/225970038/1519660003",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
    },
}*/
const tweetGenerator = {
    gen: (tweets) => {
        if (!tweets) return;
        tweets.forEach((tweet) => {
            const tweethtml = $(`#${defaultColumn.default} .tweets`).append(`<blockquote class="twitter-tweet" data-lang="en"><a href="https://twitter.com/${tweet.name}/status/${tweet.source}?ref_src=twsrc%5Etfw"></a></blockquote>`)
            twttr.widgets.load(tweethtml)
        });
    }
}
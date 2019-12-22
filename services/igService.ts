import axios from "axios";
import { injectable } from "inversify";

@injectable()
export default class igService {
    async getUserInfo(userProfile: string) {
        var response = await axios.get(`https://www.instagram.com/${userProfile}/?__a=1`);
        var userinfo = response.data.graphql.user;
        if (userinfo.is_private) {
            return {
                name: userinfo.full_name,
                profile: userinfo.profile_pic_url_hd,
                followersCount: userinfo.edge_followed_by.count
            };
        }
        var mostLikedPost = this.getMostLikedPost(userinfo);
        var activeFollowers = this.getActiveFollowersPercentage(userinfo);
        return {
            name: userinfo.full_name,
            profile: userinfo.profile_pic_url_hd,
            followersCount: userinfo.edge_followed_by.count,
            topPost: mostLikedPost,
            activeFollowers: activeFollowers
        };
    }
    getActiveFollowersPercentage(userInfo: any) {
        var count = 0;
        var sum = 0;
        userInfo.edge_owner_to_timeline_media.edges.forEach((post: any) => {
            sum += post.node.edge_liked_by.count;
            count++;
        });
        var followersCount = userInfo.edge_followed_by.count;
        var avg = sum / count || 0;
        var precentage = (avg / followersCount * 100);
        return Math.round(precentage);
    }
    getMostLikedPost(userInfo: any): string {
        var postUrl = "";
        var maxLikes = 0;
        userInfo.edge_owner_to_timeline_media.edges.forEach((post: any) => {
            var likeCount = post.node.edge_liked_by.count;
            if (maxLikes < likeCount) {
                maxLikes = likeCount;
                postUrl = post.node.display_url;
            }
        });
        return postUrl;
    }
}
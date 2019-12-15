import axios from "axios";
import { injectable } from "inversify";

@injectable()
export default class igService {
   async getUserInfo(userProfile: string) {
        var response = await axios.get(`https://www.instagram.com/${userProfile}/?__a=1`);
        console.log(response.data.graphql.user);
        return response.data.graphql.user;
    }
}
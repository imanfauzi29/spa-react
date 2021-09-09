import axios from "axios"

export default class PersonnelService {
    BASE_URL = "https://randomuser.me/api?results=4"

    getUser(page) {
        page = page ? `&page=${page}` : ""
        return axios.get(this.BASE_URL + page).then(res => res.data)
    }
}

import axios from "axios";

const baseUrl = "http://localhost:49369/api/"

export default{
    dCandidate(url=baseUrl + 'dcandidate/'){   //dcandidate is the rest of the localhost:..../api/--> dcandidate  <-- 
        return{
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url+id),
            create: newRecord => axios.post(url,newRecord),
            update: (id,updateRecord) =>axios.put(url+id,updateRecord),
            delete: id => axios.delete(url+id)
        }
    }
}
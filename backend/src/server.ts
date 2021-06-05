import { http } from "./http";
import "./websocket/client";

http.listen(3030, () => {
    console.log("The server is running on port 3030!")
})
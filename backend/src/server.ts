import { http } from "./http";
import "./websocket/client";
import './websocket/admin';

http.listen(3030, () => {
    console.log("The server is running on port 3030!")
})
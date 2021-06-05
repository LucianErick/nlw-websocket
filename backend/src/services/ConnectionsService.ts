import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";
import { Message } from "../entities/Message";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IConnectionCreate {
    socket_id: string;
    user_id: string;
    admin_id?: string;
    id?: string;
}

class ConnectionsService {
    private connectionsRepository: Repository<Connection>;

    constructor() {
        this.connectionsRepository = getCustomRepository(ConnectionsRepository);
    }

    async create({socket_id, admin_id, id, user_id}: IConnectionCreate) {

        const connection = this.connectionsRepository.create({
            socket_id,
            admin_id,
            user_id,
            id
        })

        await this.connectionsRepository.save(connection);
        return connection;
    }

    async findByUserId(user_id: string) {
        const connection = await this.connectionsRepository.findOne({
            user_id
        });

        return connection;
    }
}

export {ConnectionsService};
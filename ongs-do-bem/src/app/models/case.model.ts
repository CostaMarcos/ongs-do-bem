import Ong from "./ong.model";

export default interface Case {
    id: number,
    title: string,
    description: string,
    value: number,
    ong_id: Ong
}
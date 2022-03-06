import Ong from "./ong.model";

export default interface Case {
    title: string,
    description: string,
    value: number,
    ong_id: Ong
}
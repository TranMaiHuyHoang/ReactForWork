import CountState from "./Element/CountState";
import StateFree from "./Element/StateFree";
import StateUser from "./Element/StateUser";
import StateUser1 from "./Element/StateUser1";

export default function State() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Buổi học State</h1>
            {/* <CountState/> */}
            {/* <StateFree/> */}
            {/* <StateUser /> */}
            <StateUser1/>
        </div>
    );
}

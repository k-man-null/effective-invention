import Lottie from "lottie-react";

import loading from "./Loading.json"

export default function Loading() {
    return(
        <Lottie animationData={loading} loop={true} />
    )
}
import { Typography } from "@mui/material";
import React from "react";
import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";

export default function Regions() {
    return (
        <><Header backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)"/>
            <Typography>Regions</Typography>
            <Footer backgroundColor="rgba(255,255,255, 0.27)" backdropFilter="blur(10px)"/>
        </>
    );
}

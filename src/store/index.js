import { configureStore } from "@reduxjs/toolkit";
import trainer from "./slices/trainer.slices";

configureStore({
    reducer: {
        trainer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import trainer from "./slices/trainer.slices";

export default configureStore({
    reducer: {
        trainer
    }
})
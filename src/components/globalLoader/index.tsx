import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { RootState } from "../../Redux/store"
import { useSelector } from 'react-redux';
export default function SimpleBackdrop() {
    const { globalLoader } = useSelector((state: RootState) => state.globalLoaderReducer)

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={globalLoader}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}

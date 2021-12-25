import './index.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import App from "./App";
import styled from "styled-components";
import {openSidebar} from "./redux/sidebarReducer";

function useQuery() {
    const {search} = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Routers = styled.div`
       width: 100%
`

function AppContainer() {
    const dispatch = useDispatch()
    let query = useQuery();
    const isSignInModalOpen = useSelector(state => state.modal.isSighInModalOpen)
    const isLoginModalOpen = useSelector(state => state.modal.isLoginModalOpen)
    const isMoreInfoModalOpen = useSelector(state => state.modal.isMoreInfoModalOpen)
    let isSidebarOpen = useSelector(state => state.sidebar.isSidebarOpen)

    const open = () => dispatch(openSidebar())
    return (
        <>
            <App query={query}
                 open={open}
                 isSidebarOpen={isSidebarOpen}
                 isSignInModalOpen={isSignInModalOpen}
                 isMoreInfoModalOpen={isMoreInfoModalOpen}
                 isLoginModalOpen={isLoginModalOpen}/>
        </>
    );
}

export default AppContainer;

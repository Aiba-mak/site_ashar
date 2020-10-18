import React, { useEffect } from 'react';
import './Home.css'
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions'
import HomeCarousel from '../components/HomeCarousel';
import AboutUsPagination from '../components/paginations/AboutUsPagination';
import Info from '../components/main_components/Info';
import Cards from '../components/main_components/Cards';
import ListInfo from '../components/main_components/ListInfo';
import LastNews from '../components/main_components/LastNews';

const Home = (props) => {
    return (
        <div className="HomeMainDiv">
            <HomeCarousel />
            <Info/>
            <Cards/>
            <ListInfo/>
            <LastNews/>
            <AboutUsPagination/>
        </div>
    );
}

const mapStateToProps = (state) => {
    const { data, loading, err } = state.ProductReducer;
    return { data, loading, err };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (page) => dispatch(fetchData(page))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
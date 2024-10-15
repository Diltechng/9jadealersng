import {useState} from 'react';
import Latest from '../latest/Latest.Component.jsx';
import EditorsSugg from './Editors-sugg/EditorsSugg.jsx';
import Category from './Categories/Categorymenu.js';
import Trending from './Trending/Trending.component.jsx';
import Groups from './groupsComp/Groups.component.js';
import Distress from './Distress/Distress.component.js';
import Categories from './Categories/Categories.js';


const useActionbox=()=>{
    const [currentBox, setCurrentBox] = useState('Latest');
        const renderPage = () =>{
    switch (currentBox) {
        case 'Latest':
            return <Latest/>;
        case 'Editor':
            return <EditorsSugg/>;
        case 'Categories':
            return <Categories/>;
        case 'Trending':
            return <Trending/>;
        case 'Groups':
            return <Groups/>;
        case 'Distress':
            return <Distress/>
        default:
            return <Latest/>;
    }
};
    return(
        {renderPage, setCurrentBox}
    )
}
export default useActionbox;
import {useState} from 'react';
import Latest from '../latest/Latest.Component.jsx';
import EditorsSugg from './Editors-sugg/EditorsSugg.jsx';
import Categorymenu from './Categories/Categorymenu.js';
import Trending from './Trending/Trending.component.jsx';
import Groups from './groupsComp/Groups.component.js';
import Distress from './Distress/Distress.component.js';


const useActionbox=()=>{
    const [currentBox, setCurrentBox] = useState('Latest');
        const renderPage = () =>{
    switch (currentBox) {
        case 'Latest':
            return <Latest/>;
        case 'Editor':
            return <EditorsSugg/>;
        case 'Categories':
            return <Categorymenu/>;
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
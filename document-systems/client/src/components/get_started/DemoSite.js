import React from 'react';
import {Site} from 'tabler-react';
 import logo from './../../logo.svg';
const DemoSite = () => {
    return(
        <Site>
            <Site.Header align="left">
                <Site.Logo 
                    alt="alt"
                    src={logo}
                    href="https://www.google.com/"
                />
                This is Site Header
            </Site.Header>
            <Site.Footer 
                copyright="@copy right"
            >
            </Site.Footer>
        </Site>

    );
}
export default DemoSite;
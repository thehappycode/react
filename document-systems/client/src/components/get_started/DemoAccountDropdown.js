import React from 'react';
import {AccountDropdown} from 'tabler-react';

const DemoAccountDropdown = () => {
    return(
        <AccountDropdown 
            avatarURL="../../../public/logo192.png"
            name="Jane Pearson"
            description="Administrator"
            options={[
                "profile",
                {icon: "setting", value: "Setting", to: "/setting"},
                "mail",
                "message",
                "divider",
                "help",
                "logout"
            ]}
        />
    );
}

export default DemoAccountDropdown;
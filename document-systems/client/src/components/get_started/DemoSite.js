import React from 'react';
import {
    Site,
    Nav,
    Button,
    Grid,
    List
} from 'tabler-react';
import logo from './../../logo.svg';

const accountDropdownProps = {
    avatarURL: {logo},
    name: 'The Happy Code',
    description: 'Administrator',
    options: [
        { icon: "user", value: "Profile" },
        { icon: "settings", value: "Settings" },
        { icon: "mail", value: "Inbox", badge: "6" },
        { icon: "send", value: "Message" },
        { isDivider: true },
        { icon: "help-circle", value: "Need help?" },
        { icon: "log-out", value: "Sign out" },
    ]
}

const DemoSite = () => {
    return(
        <Site.Wrapper
            headerProps={{
                href: "/",
                alt: "alt",
                imageURL: logo,
                navItems: (
                    <Nav.Item
                        type="div"
                        className="d-none d-md-flex"
                    >
                        <Button
                            href="https://github.com/tabler/tabler-react"
                            target="_blank"
                            outline
                            size="sm"
                            RootComponent="a"
                            color="primary"
                        >
                            Source code
                        </Button>
                    </Nav.Item>
                ),
                accountDropdown: accountDropdownProps
            }}
            footerProps={{
                links: [
                    <a href="#">First Link</a>,
                    <a href="#">Second Link</a>,
                    <a href="#">Third Link</a>,
                    <a href="#">Fourth Link</a>,
                    <a href="#">Five Link</a>,
                    <a href="#">Sixth Link</a>,
                    <a href="#">Seventh Link</a>,
                    <a href="#">Eigth Link</a>
                ],
                note: "Premium and Open Source dashboard template with responsive and hight quanlity UI. For Free!",
                copyright: (
                    <React.Fragment>
                      Copyright © 2019
                      <a href="."> Tabler-react</a>. Theme by
                      <a
                        href="https://codecalm.net"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        codecalm.net
                      </a>{" "}
                      All rights reserved.
                    </React.Fragment>
                  ),
                  nav: (
                    <React.Fragment>
                      <Grid.Col auto={true}>
                        <List className="list-inline list-inline-dots mb-0">
                          <List.Item className="list-inline-item">
                            <a href="./docs/index.html">Documentation</a>
                          </List.Item>
                          <List.Item className="list-inline-item">
                            <a href="./faq.html">FAQ</a>
                          </List.Item>
                        </List>
                      </Grid.Col>
                      <Grid.Col auto={true}>
                        <Button
                          href="https://github.com/tabler/tabler-react"
                          size="sm"
                          outline
                          color="primary"
                          RootComponent="a"
                        >
                          Source code
                        </Button>
                      </Grid.Col>
                    </React.Fragment>
                  )
            }}
        >
        </Site.Wrapper>

    );
}
export default DemoSite;
import * as React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {
    Site,
    Nav,
    Grid,
    List,
    Button,
    RouterContextProvider
} from 'tabler-react';
import type { NotificationProps } from "tabler-react";

type Props = {|
    +childern: React.Node,
|}

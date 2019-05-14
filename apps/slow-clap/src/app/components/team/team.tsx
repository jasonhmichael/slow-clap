import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';

export const Team = () => {
    return(
        <div>
          <Card>
          <CardContent>
        <List>Your team
        {/* { this.state.team.item.forEach(element => {
          <ListItem>element</ListItem>
        })} */}
          <ListItem>Tulsa</ListItem>
          <ListItem>Duke</ListItem>
        </List>
        </CardContent>
        </Card>
        </div>
    )
};
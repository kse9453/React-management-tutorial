import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '김성은',
    birthday: '1994.05.03',
    gender: '여자',
    job: '직장인',
  },

  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '김영빈',
    birthday: '2001.07.10',
    gender: '남자',
    job: '대학생',
  },

  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '양수빈',
    birthday: '1994.11.01',
    gender: '여자',
    job: '직장인',
  },
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((a) => {
              return (
                <Customer
                  key={a.id}
                  id={a.id}
                  image={a.image}
                  name={a.name}
                  birthday={a.birthday}
                  gender={a.gender}
                  job={a.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

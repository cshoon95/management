import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Table';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})
const customers = [
  {
    'id':1,
    'image':'https://palceimg.com/64/64/1',
    'name':'조수훈',
    'birthday': '950921',
    'gender' : '남자',
    'job' : '풀스택 개발자'
  },
  {
    'id':2,
    'image':'https://palceimg.com/64/64/2',
    'name':'홍길동',
    'birthday': '001231',
    'gender' : '남자',
    'job' : '백엔드 개발자'
  },
  {
    'id':3,
    'image':'https://palceimg.com/64/64/3',
    'name':'이순신',
    'birthday': '210519',
    'gender' : '남자',
    'job' : '프론트 개발자'
  }
]

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
          {
            customers.map(c => {
              return (
                <Customer
                key={c.id}
                id={c.id}
                image={c.iamge}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                />
                )
            })
          }
            </TableBody>
        </Table>
        
      </Paper>
      
    );
  } 
}

export default withStyles(styles)(App);

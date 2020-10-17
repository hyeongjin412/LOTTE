import React  from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ListIcon from '@material-ui/icons/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';
import { green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite'
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  iconButton: {
    padding: 10,
  },
  iconButton1: {
    fontSize: 60,
    width: 64, height: 64,
    color: '#212121',
    
  },
  title: {

    backgroundColor: '#d50000'

  },

    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '15ch',
    },
    root1: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "red"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "red"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "red"
      }
    },

    root3: {
      maxWidth: 250, height: 550
    },
    media: {
      height: 0,
      paddingTop: '100%', // 16:9
    },
    avatar: {
      backgroundColor: green[500],
      width: 35
    },
    avatar2: {
      backgroundColor: '#ffffff',
      width: 35
    },
  
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#757575',
      
    },
    secondary: {
      main: '#d50000',
      
    },

  },
  }
 )
 
class App extends React.Component {
  state = {
    checked: true,
    checked1:true
  };

  onChange(ev) {
    this.setState({checked: ev.target.checked});
    
  }
  onChange1(ev){
    this.setState({checked1: ev.target.checked});
  }
 
  render(){
    const { classes } = this.props;
    
  return (
    
    <div className="App">
      <Container maxWidth="lg">
      
      <div className={classes.root}>
      <Grid container spacing={8}>
      <ThemeProvider theme={theme}>
       <Grid item xs={3}/>
       <Grid item xs={3}/>
       <Grid item xs={3}/>
        <Grid item xs={3}>
        
        <Button size="small" color= "primary" >로그인</Button>
        <Button size="small" color= "primary" >회원가입</Button>
        <Button size="small"color= "primary">주문배송</Button>
        <Button size="small"color= "primary">고객센터</Button>
       
        </Grid>
  
        <Grid item xs={1}/>
        
        <Button style={{ fontSize: '35px'}} color= "secondary">LOTTE ON</Button>
        <Grid item xs={1}/>
        <TextField color= "secondary"  
          id="outlined-full-width"
          className={classes.root1}
          style={{ margin: 8, width:400, backgroundColor: '#fff'  }}
          margin="normal"
          variant="outlined"
        >
  
        </TextField>
        <IconButton type="submit"  color= "secondary" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Grid item xs={1}/>
      <IconButton   className={classes.iconButton1}  >
      <InsertCommentOutlinedIcon/>
      </IconButton>
      <IconButton  className={classes.iconButton1}  >
      <FavoriteBorderIcon/>
      </IconButton>
      <IconButton  className={classes.iconButton1} style={{ width: 75}}>
      <PersonOutlineIcon/>
      </IconButton>
      <IconButton t className={classes.iconButton1}  fontSize="large">
      <LocalGroceryStoreIcon/>
      </IconButton>
      
      <Grid container spacing={7}>
        <Grid item xs={8}/>
        ㅤㅤㅤㅤㅤㅤ
        <Button style={{ fontSize: '14px'}} >챗봇</Button>
        <Button style={{ fontSize: '14px'}} >나의 찜</Button>
        <Button style={{ fontSize: '14px'}} >마의 롯데</Button>
        <Button style={{ fontSize: '14px'}} >장바구니</Button>
        <Grid item xs={12}/>
        </Grid>
    
        </ThemeProvider>
        
        </Grid>
        
        </div>
       
      
      <ThemeProvider theme={theme}>
      <div className={classes.root}>
      <AppBar position="static" className={classes.title} style={{ width:1250}}>
        <Toolbar className={classes.title}>
        ㅤㅤㅤㅤ
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            borderColor="secondary"

            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h8" noWrap>
          <Button color="inherit">오늘ON </Button>ㅤㅤ<Button color="inherit">타임딜</Button>ㅤㅤ<Button color="inherit">장보기</Button>ㅤㅤ<Button color="inherit">백화점</Button>ㅤㅤ<Button color="inherit">럭셔리ON</Button>ㅤㅤ<Button color="inherit">오늘발송</Button>ㅤㅤ
          <Button color="inherit">내관심</Button>ㅤㅤ<Button color="inherit">이벤트존</Button>
          </Typography>
          <div>
          ㅤㅤㅤㅤㅤㅤㅤㅤㅤ
            <InputBase
              style={{ color: 'black'}}
              placeholder="친환경 플라스틱"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
           
          
        </Toolbar>
      </AppBar>
      <h2>ㅤ</h2>
      <Grid container spacing={8}>
      <Grid item xs={5}/>
      <h2>물에 대한 검색결과</h2>
      </Grid>
    </div>
    <h2>ㅤ</h2>

    <ButtonGroup style={{height: 70,fontSize: '20px'}} color="primary" aria-label="large outlined primary button group">
        <Button style={{width:  300, color: 'black',fontSize: '23px'}} >상품(22,647)</Button>
        <Button style={{width: 300,fontSize: '20px'}}>롯데백화점(1,399)</Button>
        <Button style={{width: 300,fontSize: '20px'}} >리뷰(480)</Button>
        <Button style={{width: 300,fontSize: '20px'}}>브랜드(98)</Button>
      </ButtonGroup>
      <Grid container spacing={5}>
      <Grid item xs={12}/>
     
    <Paper style={{width:200, height: 500 , display: 'flex', flexWrap: 'wrap'}}>
    <Button style={{ fontSize: '20px', color:'black'  }}>필터</Button>
    <Grid item xs={1}/>
        <FormControlLabel
        control={
        <Checkbox
        checked1={this.state.checked1}
        onChange1={this.onChange.bind(this)}
        /> }
        label="오늘발송　　"
        />
        
        <Grid item xs={1}/>
        <FormControlLabel
        control={
        <Checkbox
        checked1={this.state.checked1}
        onChange1={this.onChange.bind(this)}
        /> }
        label="👑롯데오너스"
        />
        <Button style={{ fontSize: '20px', color:'black'  }}>매장</Button>
        <Grid item xs={1}/>
        <FormControlLabel
        control={
        <Checkbox
        checked1={this.state.checked1}
        onChange1={this.onChange.bind(this)}
        /> }
        label="롯데백화점"
        />
        <Grid item xs={1}/>
        <FormControlLabel
        control={
        <Checkbox
        checked1={this.state.checked1}
        onChange1={this.onChange.bind(this)}
        /> }
        label="롯데마트"
        />
        <Grid item xs={1}/>
        <FormControlLabel
        control={
        <Checkbox
        checked1={this.state.checked1}
        onChange1={this.onChange.bind(this)}
        /> }
        label="롭스"
        />
        <Grid item xs={1}/>
        <FormControlLabel
        control={
        <Checkbox
        checked1={this.state.checked1}
        onChange1={this.onChange.bind(this)}
        /> }
        label="하이마트"
        />
        <Grid item xs={1}/>
        <FormControlLabel
        control={
        <Checkbox
        checked1={this.state.checked1}
        onChange1={this.onChange.bind(this)}
        /> }
        label="롯데 홈쇼핑"
        />
        
     </Paper>
     ㅤㅤㅤㅤ
      <Paper style={{height: 45}} >
      
        <Button startIcon={<CheckIcon/>} style={{ fontSize: '12px' }}>롯데ON 랭킹순<IconButton size="small"> <HelpOutlineOutlinedIcon/></IconButton></Button>
        <Button style={{ fontSize: '12px' }}>판매순 <IconButton size="small"> <HelpOutlineOutlinedIcon/></IconButton></Button>
        <Button style={{ fontSize: '12px' }}>리뷰 많은순</Button>
        <Button style={{ fontSize: '12px' }}>최신순</Button>
        <Button style={{ fontSize: '12px' }}>낮은 가격순</Button>
        <Button style={{ fontSize: '12px' }}>높은 가격순</Button>
        ㅤㅤㅤㅤ
        <Button
        style={{color:'#212121',fontSize: '12px',height:40}}
        variant="outlined"
        size = "small"
        
        startIcon={<CheckIcon/>}
      >
        상품 비교
      </Button>
      <Button
        style={{color:'#212121',fontSize: '12px',height:40}}
        variant="outlined"
        size = "small"
        
        startIcon={<CheckIcon/>}
      >
        60개씩 보기
      </Button>
      <IconButton size="large"> <ListIcon/></IconButton>
      <Button></Button>
      <Grid container spacing={3}>
      <Grid item xs={4}>
      <Button>
      <Card className={classes.root3}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            <IconButton size="small" style={{color:'#fafafa'}}><EcoOutlinedIcon/></IconButton>
          </Avatar>
        }
        style={{fontSize:'10px'}}
        title="친환경 캠페인 제품입니다."
        
      />
      
     <CardMedia
        className={classes.media}
        image={"icis2.png" }
        
      />
      
      <CardContent>
        
          <Button size= "small" disabled variant="outlined" style={{fontSize:'7px',color:"#000000"}}>AD</Button>
          <Button size= "small" disabled variant="outlined" style={{color:'#0d47a1', fontSize:'7px'}}>오늘배송</Button>　　　　
          <Button disabled style={{color:'#000000'}}>
           <Typography style={{fontWeight:1000}} >아이시스 </Typography>
           <Typography style={{fontSize:'13px'}}>아이시스 에코 8.0 1.5L</Typography>
        </Button>
        <Button disabled style={{color:'#000000'}}><Typography style={{fontSize:'13px'}}>⭐4.5(31)</Typography>
          <Typography style={{fontSize:'10px'}}>　월간구매　　　　　　　　　</Typography>
        </Button>
        <Button disabled style={{color:'#000000'}}>
        <Typography style={{fontWeight:1000}} >14900 </Typography>
        <Typography style={{fontSize:'10px'}}>원(100ML 41원)　　　　　　　　</Typography>
        </Button>
        <Button disabled style={{color:'#000000'}}>
        <Typography style={{fontWeight:1000, color:"#6a1b9a"}} >14760</Typography>
        <Typography style={{fontSize:'10px',color:"#6a1b9a"}}>원👑 추가1%　　　　　　　　　</Typography>
        </Button>  
        　　　　　　　　　
        <IconButton size="small" aria-label="add to favorites">
        <FavoriteIcon />
        </IconButton>
        <IconButton size="small" aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardContent>
   
    </Card>
    </Button>
    </Grid>
    <Grid item xs={4}>
      <Button>
      <Card className={classes.root3}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            <IconButton size="small" style={{color:'#fafafa'}}><EcoOutlinedIcon/></IconButton>
          </Avatar>
        }
        style={{fontSize:'10px'}}
        title="친환경 캠페인 제품입니다."
        
      />
      
     <CardMedia
        className={classes.media}
        image={"icis.png" }
        
      />
      
      <CardContent>
        
          <Button size= "small" disabled variant="outlined" style={{fontSize:'7px',color:"#000000"}}>AD</Button>
          <Button size= "small" disabled variant="outlined" style={{color:'#0d47a1', fontSize:'7px'}}>오늘배송</Button>　　　　
          <Button disabled style={{color:'#000000'}}>
           <Typography style={{fontWeight:1000}} >아이시스 </Typography>
           <Typography style={{fontSize:'13px'}}>아이시스 에코 8.0 1.5L</Typography>
        </Button>
        <Button disabled style={{color:'#000000'}}><Typography style={{fontSize:'13px'}}>⭐4.5(31)</Typography>
          <Typography style={{fontSize:'10px'}}>　월간구매　　　　　　　　　</Typography>
        </Button>
        <Button disabled style={{color:'#000000'}}>
        <Typography style={{fontWeight:1000}} >7500 </Typography>
        <Typography style={{fontSize:'10px'}}>원(100ML 41원)　　　　　　　　　</Typography>
        </Button>
        <Button disabled style={{color:'#000000'}}>
        <Typography style={{fontWeight:1000, color:"#6a1b9a"}} >7430</Typography>
        <Typography style={{fontSize:'10px',color:"#6a1b9a"}}>원👑 추가1%　　　　　　　　　　</Typography>
        </Button>  
        　　　　　　　　　
        <IconButton size="small" aria-label="add to favorites">
        <FavoriteIcon />
        </IconButton>
        <IconButton size="small" aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardContent>
   
    </Card>
    </Button>
    </Grid>
    <Grid item xs={4}>
    <Button>
      <Card className={classes.root3}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar2}>
            <IconButton disabled size="small" style={{color:'#ffffff'}}><EcoOutlinedIcon/></IconButton>
          </Avatar>
        }
        style={{fontSize:'10px'}}
        title=""
        
      />
    
      <CardMedia
        className={classes.media}
        image={"icis3.png" }
        
      />
      
      <CardContent>
        
          <Button size= "small" disabled variant="outlined" style={{fontSize:'7px',color:"#000000"}}>AD</Button>
          <Button size= "small" disabled variant="outlined" style={{color:'#0d47a1', fontSize:'7px'}}>오늘배송</Button>　　　　
          <Button disabled style={{color:'#000000'}}>
           <Typography style={{fontWeight:1000}} >아이시스 </Typography>
           <Typography style={{fontSize:'12px'}}>아이시스 8.0 생수 200ml</Typography>
        </Button>
        
        <Button disabled style={{color:'#000000'}}><Typography style={{fontSize:'13px'}}>⭐4.5(31)</Typography>
          <Typography style={{fontSize:'10px'}}>　월간구매　　　　　　　　　</Typography>
        </Button>
        <Button disabled style={{color:'#000000'}}>
        <Typography style={{fontWeight:1000}} >9900 </Typography>
        <Typography style={{fontSize:'10px'}}>원(100ML 41원)　　　　　　　　　</Typography>
        </Button>
        <Button disabled style={{color:'#000000'}}>
        <Typography style={{fontWeight:1000, color:"#6a1b9a"}} >9810</Typography>
        <Typography style={{fontSize:'10px',color:"#6a1b9a"}}>👑 추가1%　　　　　　　　　　　</Typography>
        </Button>  
        　　　　　　　　　
        <IconButton size="small" aria-label="add to favorites">
        <FavoriteIcon />
        </IconButton>
        <IconButton size="small" aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardContent>
   
    </Card>
    </Button>
    </Grid>
    </Grid>
    
    </Paper>
    
    </Grid>
    
    </ThemeProvider>
    </Container>
    
    </div>
  );
  }
}

export default withStyles(styles)(App);

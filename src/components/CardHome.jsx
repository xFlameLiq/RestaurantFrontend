import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardHome = ({img, title, desc}) => {

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={img}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {desc}
            </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    </>
  )
}

export default CardHome

CardHome.propTypes = {
    img: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }

  
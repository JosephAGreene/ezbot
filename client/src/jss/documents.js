const documentStyles = (theme) => ({
  wrapper: {
    paddingBottom: theme.spacing(4),
  },
  mainHeading: {
    fontSize: 28,
    color: theme.palette.white.main,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: "0 25px",
    },
  },
  subHeading: {
    fontSize: 22,
    color: theme.palette.white.main,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: "0 25px",
    },
  },
  textContent: {
    color: theme.palette.white.dark,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: "0 35px",
    },
  }, 
  greenText: {
    color: theme.palette.green.main,
  }, 
  link: {
    color: theme.palette.teal.main,
    textDecoration: "none",
    '&:hover': {
      color: theme.palette.teal.light,
      textDecoration: "underline",
    },
  },
});

export default documentStyles;
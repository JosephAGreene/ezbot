const documentStyles = (theme) => ({
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
  }
});

export default documentStyles;
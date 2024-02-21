import React from 'react'
import '@/styles/globals.css'
import '@/styles/main.scss'
import Footer from '../components/Footer'
import store from '../../stores/storeConfig'
import * as actions from '../../stores/actionsList'
import withRedux from "next-redux-wrapper";
import i18n from 'i18next';
import { languagesInfo, siteConfig } from '../../variables/config'
import { Provider } from 'react-redux'
import { changeUrlWithLng } from '../../utils/useful'
import { appWithTranslation } from 'next-i18next'
import Header1 from '@/components/header/Header1'



class App extends React.Component {

  state = {
    isOnTop: { opacity: '0%' },
    width: {},
    data: [],
    categories: [],
    announcements: [],
    showAnnoucement: true,
    direction: 'ltr',
    scrollPercentage: 0,
    changeColor: false,
    isDarkMode: false,

  }

  componentDidMount() {

    let direction = languagesInfo[i18n.language]?.direction
    this.setState({ direction })
    i18n.on('languageChanged', (lng) => {
      this.setState({ showPage: false })
      if (!lng) {
        lng = 'en'
      }
      direction = languagesInfo[lng]?.direction
      this.setState({ direction })
      if (siteConfig.languages.indexOf(lng) == -1) {
        return
      }
      if (siteConfig.forceUrl) {
        changeUrlWithLng(lng)
      }
      store.dispatch(actions.changeLanguage('language', lng))
      this.setState({ showPage: true })
    })


    window.addEventListener('scroll', this.handleScroll);

    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
      this.setState({ isDarkMode: JSON.parse(storedDarkMode) });
    }



  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  calculateScrollPercentage = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    console.log('windowHeight', windowHeight)
    console.log('documentHeight', documentHeight)
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    return scrollPercentage.toFixed(2);
  };

  checkUser = (dontShowNotif) => {
    setTimeout(() => {
      let user = store.getState("user")
      if (getToken()) {
        getUserInfo((data, err, status) => {
          if (status === 401) {
            store.dispatch(actions.logoutUser())
          }
          if (status === 200 && data) {
            if (data.authorized) {
              store.dispatch(actions.setUser(data.user, null, true))
            } else {
              store.dispatch(actions.logoutUser())
            }
          }

          if (err) {
            if (!dontShowNotif) {
              store.dispatch(actions.addNotif({ type: 'error', title: '{{lang}}errors.cantConnectToServer', description: '{{lang}}errors.checkYourInternetConnection' }))
            }
            store.dispatch(actions.setUser({}, null, true))
            setTimeout(() => {
              this.checkUser(true)
            }, 10000);
          }

        })
      } else {
        store.dispatch(actions.logoutUser())
      }
    }, 100);
  }

  handleScroll = () => {
    const scrollPercentage = Math.min(this.calculateScrollPercentage(), 25);
    let isOnTop = this.state.isOnTop
    isOnTop.opacity = scrollPercentage * 4
    console.log('isOnTop.opacity', isOnTop.opacity)
    console.log('scrollPercentage', scrollPercentage)
    if (isOnTop.opacity < 50) {
      this.setState({ changeColor: true })
    }
    else if (isOnTop.opacity > 50) {
      this.setState({ changeColor: false })
    }
    this.setState({ scrollPercentage, isOnTop });
  };


  setGotIt() {
    this.setState({ showAnnoucement: false })
  }


  toggleMode = () => {
    this.setState((prevState) => {
      const newDarkMode = !prevState.isDarkMode;
      localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
      return { isDarkMode: newDarkMode };
    });
  };


  render() {
    const { Component, pageProps } = this.props;
    const { isDarkMode } = this.state;
    return (

      <div className={this.state.direction}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ephesis&display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Ephesis&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>

        <Provider store={store}>
          <div className={'transition-all duration-700 ' + (isDarkMode ? 'dark' : '')}>
            <div className=''>
              <Header1 toggleMode={this.toggleMode} isDarkMode={isDarkMode} lng={this.state.lng} changeColor={this.state.changeColor} isOnTop={this.state.isOnTop} scrollPercentage={this.statescrollPercentage} passData={this.props.data} {...this.props} parent={this} />
            </div>
            <div className='scroll-smooth outline-none'>
              <Component {...pageProps} />
            </div>
            <div className=''>
              <Footer />
            </div>
          </div>
        </Provider>
      </div>
    )
  }
}


const makeStore = () => store;


export default withRedux(makeStore)(appWithTranslation(App));
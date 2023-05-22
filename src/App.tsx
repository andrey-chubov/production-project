import { Route, Routes } from 'react-router-dom'
import { Counter } from './components/Counter/Counter'
import './styles/index.scss'
import AboutPage from './pages/AboutPage/AboutPage'
import MainPage from './pages/MainPage/MainPage'
import { Link } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/About.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Suspense, useContext, useState } from 'react'
import { Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'


export const App = () => {
	const {theme, toggleTheme} = useTheme()	
	return (
			<div className={classNames('app' , {hovered: true, selected: false}, [theme,])}>
				<button onClick={toggleTheme}>TOGGLE</button>
				<Link to={'/'}>Главная</Link>
				<Link to={'/about'}>About</Link>
				<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'}  element={<AboutPageAsync/>}/>
					<Route path={'/'} element={<MainPageAsync/>}/>
				</Routes>
			  </Suspense>
		
		</div>
	)
}

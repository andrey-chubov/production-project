import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProider/lib/useTheme'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'



export const App = () => {
	const {theme, toggleTheme} = useTheme()	
	return (
			<div className={classNames('app' , {hovered: true, selected: false}, [theme,])}>
				<button onClick={toggleTheme}>TOGGLE</button>
				<Link to={'/'}>Главная</Link>
				<Link to={'/about'}>About</Link>
				<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'}  element={<AboutPage/>}/>
					<Route path={'/'} element={<MainPage/>}/>
				</Routes>
			  </Suspense>
		
		</div>
	)
}

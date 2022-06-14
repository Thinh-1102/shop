import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes/routes'
import Layout from './components/Layout';
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            {
              publicRoutes.map((route,index)=>{
                const Page = route.component
                return (
                  <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
                )
              })
            }
          </Routes>
      </Router>     
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import TutoriaisPage from './pages/TutoriaisPage'
import { navigation } from './data/navigation'

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    // Fecha sidebar ao mudar de rota (mobile)
    useEffect(() => {
        setSidebarOpen(false)
    }, [location.pathname])

    // Encontra o artigo atual baseado na rota
    const getCurrentArticle = () => {
        const path = location.pathname.replace('/', '')
        if (!path) return null

        for (const section of navigation) {
            const item = section.items.find(i => i.id === path)
            if (item) {
                return { ...item, section }
            }
        }
        return null
    }

    // Encontra artigos anterior e próximo para navegação
    const getNavigation = () => {
        const allArticles = navigation.flatMap(section =>
            section.items.map(item => ({ ...item, sectionTitle: section.title }))
        )

        const currentPath = location.pathname.replace('/', '')
        const currentIndex = allArticles.findIndex(a => a.id === currentPath)

        return {
            prev: currentIndex > 0 ? allArticles[currentIndex - 1] : null,
            next: currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null
        }
    }

    const currentArticle = getCurrentArticle()
    const articleNav = getNavigation()

    return (
        <div className="app-layout">
            {/* Overlay para mobile */}
            <div
                className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <Sidebar
                isOpen={sidebarOpen}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                currentPath={location.pathname}
                onNavigate={(path) => navigate(path)}
            />

            {/* Main Content */}
            <main className="main-content">
                <Header
                    article={currentArticle}
                    onMenuClick={() => setSidebarOpen(true)}
                />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}
                            />
                        }
                    />
                    <Route
                        path="/tutoriais"
                        element={<TutoriaisPage />}
                    />
                    <Route
                        path="/:articleId"
                        element={
                            <ArticlePage
                                navigation={articleNav}
                            />
                        }
                    />
                </Routes>

                <footer className="content-footer">
                    <p>
                        © 2025 <a href="https://wamei.com.br" target="_blank" rel="noopener noreferrer">Wamei</a>.
                        Automação com Afeto.
                    </p>
                </footer>
            </main>

            {/* Mobile Menu Button */}
            <button
                className="mobile-menu-btn"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Menu"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {sidebarOpen ? (
                        <path d="M18 6L6 18M6 6l12 12" />
                    ) : (
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    )}
                </svg>
            </button>
        </div>
    )
}

export default App

import { Link } from 'react-router-dom'

function Header({ article, onMenuClick }) {
    return (
        <header className="content-header">
            <nav className="breadcrumb">
                <Link to="/">Central de Ajuda</Link>
                {article && (
                    <>
                        <span className="breadcrumb-separator">/</span>
                        <span>{article.section.title}</span>
                        <span className="breadcrumb-separator">/</span>
                        <span>{article.title}</span>
                    </>
                )}
            </nav>

            <div className="header-actions">
                <a
                    href="https://app.wamei.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header-btn"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                    Acessar o App
                </a>
            </div>
        </header>
    )
}

export default Header

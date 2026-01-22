import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigation, categoryIcons, itemIcons } from '../data/navigation'

function Sidebar({ isOpen, searchQuery, onSearchChange }) {
    const [openSections, setOpenSections] = useState(['introducao', 'configuracao'])
    const location = useLocation()

    const toggleSection = (sectionId) => {
        setOpenSections(prev =>
            prev.includes(sectionId)
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        )
    }

    const isActive = (itemId) => {
        return location.pathname === `/${itemId}`
    }

    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            {/* Header */}
            <div className="sidebar-header">
                <Link to="/" className="sidebar-logo">
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="16" fill="#FF548B" />
                        <path d="M10 21V11l6 5 6-5v10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="sidebar-logo-text">Wamei</span>
                    <span className="sidebar-logo-badge">Ajuda</span>
                </Link>
            </div>

            {/* Search */}
            <div className="sidebar-search">
                <div className="search-wrapper">
                    <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Buscar na documentação..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
            </div>

            {/* Navigation */}
            <nav className="sidebar-nav">
                {/* Home Link */}
                <Link
                    to="/"
                    className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
                >
                    <svg className="nav-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Início
                </Link>

                {/* Sections */}
                {navigation.map(section => (
                    <div
                        key={section.id}
                        className={`nav-group ${openSections.includes(section.id) ? 'open' : ''}`}
                    >
                        <div
                            className="nav-group-header"
                            onClick={() => toggleSection(section.id)}
                        >
                            <span
                                className="nav-group-title"
                                dangerouslySetInnerHTML={{ __html: categoryIcons[section.icon] }}
                            />
                            <span className="nav-group-text">{section.title}</span>
                            <span className="nav-group-icon" />
                        </div>
                        <div className="nav-group-items">
                            {section.items.map(item => (
                                <Link
                                    key={item.id}
                                    to={`/${item.id}`}
                                    className={`nav-subitem ${isActive(item.id) ? 'active' : ''}`}
                                >
                                    <span
                                        className="nav-subitem-icon"
                                        dangerouslySetInnerHTML={{ __html: itemIcons[item.id] || '' }}
                                    />
                                    <span className="nav-subitem-text">{item.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div style={{
                padding: '1rem 1.5rem',
                borderTop: '1px solid var(--border-color)',
                fontSize: '0.75rem',
                color: 'var(--text-light)'
            }}>
                <a
                    href="https://wamei.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
                >
                    ← Voltar ao site
                </a>
            </div>
        </aside>
    )
}

export default Sidebar

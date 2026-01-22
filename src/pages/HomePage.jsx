import { Link } from 'react-router-dom'
import { navigation, categoryIcons, categoryDescriptions } from '../data/navigation'

function HomePage({ searchQuery, onSearchChange }) {
    // Filtra artigos baseado na busca
    const getSearchResults = () => {
        if (!searchQuery.trim()) return []

        const query = searchQuery.toLowerCase()
        const results = []

        navigation.forEach(section => {
            section.items.forEach(item => {
                if (item.title.toLowerCase().includes(query)) {
                    results.push({
                        ...item,
                        sectionTitle: section.title
                    })
                }
            })
        })

        return results
    }

    const searchResults = getSearchResults()

    return (
        <div className="article-wrapper">
            <div className="article-content">
                {/* Hero */}
                <div className="home-hero">
                    <h1>Como podemos ajudar?</h1>
                    <p>
                        Encontre guias, tutoriais e documentação para aproveitar ao máximo
                        a plataforma Wamei Chat.
                    </p>
                </div>

                {/* Search */}
                <div className="home-search">
                    <div className="search-wrapper">
                        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Buscar artigos, guias, tutoriais..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                        />
                    </div>
                </div>

                {/* Search Results */}
                {searchQuery.trim() && (
                    <div className="search-results">
                        {searchResults.length > 0 ? (
                            searchResults.map(result => (
                                <Link
                                    key={result.id}
                                    to={`/${result.id}`}
                                    className="search-result-item"
                                >
                                    <div className="search-result-title">{result.title}</div>
                                    <div className="search-result-category">{result.sectionTitle}</div>
                                </Link>
                            ))
                        ) : (
                            <div className="empty-state">
                                <svg className="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.35-4.35" />
                                </svg>
                                <h3>Nenhum resultado encontrado</h3>
                                <p>Tente buscar com outros termos</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Categories Grid */}
                {!searchQuery.trim() && (
                    <div className="home-categories">
                        {navigation.map(section => (
                            <Link
                                key={section.id}
                                to={`/${section.items[0].id}`}
                                className="category-card"
                            >
                                <div
                                    className="category-icon"
                                    dangerouslySetInnerHTML={{ __html: categoryIcons[section.icon] }}
                                />
                                <h3>{section.title}</h3>
                                <p>{categoryDescriptions[section.id]}</p>
                                <div className="category-articles">
                                    {section.items.length} artigo{section.items.length > 1 ? 's' : ''}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {/* Quick Links */}
                {!searchQuery.trim() && (
                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                            Precisa de mais ajuda?
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a
                                href="https://wa.me/558596093545"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    background: '#25D366',
                                    color: 'white',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    fontWeight: '500',
                                    fontSize: '0.875rem',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Falar com Suporte
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage

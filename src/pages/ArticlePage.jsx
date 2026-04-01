import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { navigation } from '../data/navigation'

// Conteúdo dos artigos (será preenchido dinamicamente)
const articleContents = {}

function ArticlePage({ navigation: articleNav }) {
    const { articleId } = useParams()
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Encontra o artigo atual
    const findArticle = () => {
        for (const section of navigation) {
            const item = section.items.find(i => i.id === articleId)
            if (item) {
                return { ...item, section }
            }
        }
        return null
    }

    const article = findArticle()

    useEffect(() => {
        const loadContent = async () => {
            setLoading(true)
            setError(null)

            if (!article) {
                setError('Artigo não encontrado')
                setLoading(false)
                return
            }

            try {
                // Carrega o arquivo via fetch
                const response = await fetch(`/${article.file}`)

                if (response.ok) {
                    let text = await response.text()
                    setContent(text)
                } else {
                    setError('Conteúdo não disponível no momento')
                }
            } catch (err) {
                console.error('Error loading article:', err)
                setError('Erro ao carregar o artigo')
            } finally {
                setLoading(false)
            }
        }

        loadContent()

        // Scroll to top when article changes
        window.scrollTo(0, 0)
    }, [articleId])

    if (loading) {
        return (
            <div className="article-wrapper">
                <div className="loading">
                    <div className="loading-spinner" />
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="article-wrapper">
                <div className="article-content">
                    <div className="empty-state">
                        <svg className="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v4M12 16h.01" />
                        </svg>
                        <h3>{error}</h3>
                        <p>
                            <Link to="/" style={{ color: 'var(--primary-color)' }}>
                                Voltar para a página inicial
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="article-wrapper">
            <div className="article-content">
                <article className="markdown-body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </ReactMarkdown>
                </article>

                {/* Navigation */}
                <nav className="article-nav">
                    {articleNav.prev ? (
                        <Link to={`/${articleNav.prev.id}`} className="article-nav-link">
                            <span className="article-nav-label">← Anterior</span>
                            <span className="article-nav-title">{articleNav.prev.title}</span>
                        </Link>
                    ) : <div />}

                    {articleNav.next && (
                        <Link to={`/${articleNav.next.id}`} className="article-nav-link next">
                            <span className="article-nav-label">Próximo →</span>
                            <span className="article-nav-title">{articleNav.next.title}</span>
                        </Link>
                    )}
                </nav>
            </div>
        </div>
    )
}

export default ArticlePage

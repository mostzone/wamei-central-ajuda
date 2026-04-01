import { useState, useEffect, useRef, useCallback } from 'react'

const tutoriais = [
    {
        id: 'video-00',
        numero: '00',
        titulo: 'Apresentação',
        descricao: 'Uma visão geral completa da plataforma Wamei: conheça os módulos, funcionalidades e como começar a usar.',
        youtubeId: '-ccAqWinrQ0',
        tags: ['Introdução', 'Visão Geral'],
    },
    {
        id: 'video-01',
        numero: '01',
        titulo: 'Dashboard Inicial',
        descricao: 'Navegue pelo Dashboard principal, entenda os painéis de métricas e saiba como monitorar os atendimentos em tempo real.',
        youtubeId: 'ZiiNbOt7yCU',
        tags: ['Dashboard', 'Métricas'],
    },
    {
        id: 'video-02a',
        numero: '02',
        titulo: 'Tela de Atendimento — Parte 1',
        descricao: 'Aprenda a usar a tela de atendimento: caixa de entrada, abertura de conversas, filtros e ações rápidas.',
        youtubeId: 'Zo731dNfcYI',
        tags: ['Atendimento', 'Caixa de Entrada'],
    },
    {
        id: 'video-02b',
        numero: '02',
        titulo: 'Tela de Atendimento — Parte 2',
        descricao: 'Transferências, anotações internas, finalização de atendimentos e avaliações de qualidade.',
        youtubeId: 'zdavQM3W50I',
        tags: ['Atendimento', 'Finalização'],
    },
    {
        id: 'video-03',
        numero: '03',
        titulo: 'Tela de Contatos',
        descricao: 'Gerencie o cadastro de contatos: pesquisa, edição de dados, histórico de conversas e segmentação.',
        youtubeId: '_yGHE1OadUU',
        tags: ['Contatos', 'CRM'],
    },
]

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00'
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
}

// ──────────────────────────────────────────────────────────────
// Custom Player Component
// ──────────────────────────────────────────────────────────────
function WameiPlayer({ tutorial }) {
    const playerRef = useRef(null)
    const ytRef = useRef(null)
    const containerRef = useRef(null)
    const intervalRef = useRef(null)

    const [ready, setReady] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [progress, setProgress] = useState(0)   // 0–100
    const [current, setCurrent] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(100)
    const [muted, setMuted] = useState(false)
    const [showVolume, setShowVolume] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [showControls, setShowControls] = useState(true)
    const hideTimeout = useRef(null)
    // Quality
    const [qualityLevels, setQualityLevels] = useState([])
    const [currentQuality, setCurrentQuality] = useState('auto')
    const [showQuality, setShowQuality] = useState(false)
    const qualityRef = useRef(null)

    // Playback Speed
    const [playbackRate, setPlaybackRate] = useState(1)
    const [showSpeed, setShowSpeed] = useState(false)
    const speedRef = useRef(null)

    // Load YT API once (global singleton)
    useEffect(() => {
        if (window.YT && window.YT.Player) return
        if (document.getElementById('yt-api-script')) return
        const tag = document.createElement('script')
        tag.id = 'yt-api-script'
        tag.src = 'https://www.youtube.com/iframe_api'
        document.head.appendChild(tag)
    }, [])

    // Create / recreate player when tutorial changes
    useEffect(() => {
        setReady(false)
        setPlaying(false)
        setProgress(0)
        setCurrent(0)
        setDuration(0)
        clearInterval(intervalRef.current)

        function createPlayer() {
            if (ytRef.current) {
                ytRef.current.destroy()
                ytRef.current = null
            }

            ytRef.current = new window.YT.Player(playerRef.current, {
                videoId: tutorial.youtubeId,
                playerVars: {
                    controls: 0,
                    disablekb: 1,
                    rel: 0,
                    modestbranding: 1,
                    iv_load_policy: 3,
                    showinfo: 0,
                    fs: 0,
                    playsinline: 1,
                    enablejsapi: 1,
                },
                events: {
                    onReady(e) {
                        setDuration(e.target.getDuration())
                        setVolume(e.target.getVolume())
                        setReady(true)
                        // Populate quality levels once ready
                        const levels = e.target.getAvailableQualityLevels()
                        if (levels && levels.length) setQualityLevels(levels)
                        setCurrentQuality(e.target.getPlaybackQuality())
                    },
                    onStateChange(e) {
                        const YT = window.YT.PlayerState
                        if (e.data === YT.PLAYING) {
                            setPlaying(true)
                            setDuration(ytRef.current.getDuration())
                            // Refresh quality list when playback starts (levels may expand)
                            const levels = ytRef.current.getAvailableQualityLevels()
                            if (levels && levels.length) setQualityLevels(levels)
                            setCurrentQuality(ytRef.current.getPlaybackQuality())
                            intervalRef.current = setInterval(() => {
                                const cur = ytRef.current?.getCurrentTime() || 0
                                const dur = ytRef.current?.getDuration() || 1
                                setCurrent(cur)
                                setProgress((cur / dur) * 100)
                                setCurrentQuality(ytRef.current?.getPlaybackQuality() || 'auto')
                                setPlaybackRate(ytRef.current?.getPlaybackRate() || 1)
                            }, 250)
                        } else {
                            setPlaying(false)
                            clearInterval(intervalRef.current)
                            if (e.data === YT.ENDED) {
                                setProgress(100)
                            }
                        }
                    },
                    onPlaybackQualityChange(e) {
                        setCurrentQuality(e.data)
                    },
                    onPlaybackRateChange(e) {
                        setPlaybackRate(e.data)
                    },
                },
            })
        }

        if (window.YT && window.YT.Player) {
            createPlayer()
        } else {
            window.onYouTubeIframeAPIReady = createPlayer
        }

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [tutorial.youtubeId])

    // Close quality menu on outside click
    useEffect(() => {
        const handler = (e) => {
            if (qualityRef.current && !qualityRef.current.contains(e.target)) {
                setShowQuality(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    // Close speed menu on outside click
    useEffect(() => {
        const handler = (e) => {
            if (speedRef.current && !speedRef.current.contains(e.target)) {
                setShowSpeed(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    // Fullscreen listener
    useEffect(() => {
        const handler = () => setIsFullscreen(!!document.fullscreenElement)
        document.addEventListener('fullscreenchange', handler)
        return () => document.removeEventListener('fullscreenchange', handler)
    }, [])

    // Auto-hide controls
    const resetHide = useCallback(() => {
        setShowControls(true)
        clearTimeout(hideTimeout.current)
        if (playing) {
            hideTimeout.current = setTimeout(() => setShowControls(false), 2800)
        }
    }, [playing])

    useEffect(() => {
        if (!playing) {
            clearTimeout(hideTimeout.current)
            setShowControls(true)
        }
    }, [playing])

    // Actions
    const togglePlay = () => {
        if (!ytRef.current) return
        playing ? ytRef.current.pauseVideo() : ytRef.current.playVideo()
    }

    const seek = (e) => {
        if (!ytRef.current) return
        const rect = e.currentTarget.getBoundingClientRect()
        const pct = (e.clientX - rect.left) / rect.width
        const dur = ytRef.current.getDuration()
        ytRef.current.seekTo(pct * dur, true)
        setProgress(pct * 100)
        setCurrent(pct * dur)
    }

    const changeVolume = (e) => {
        const v = Number(e.target.value)
        setVolume(v)
        ytRef.current?.setVolume(v)
        if (v === 0) {
            setMuted(true)
            ytRef.current?.mute()
        } else {
            setMuted(false)
            ytRef.current?.unMute()
        }
    }

    const toggleMute = () => {
        if (!ytRef.current) return
        if (muted) {
            ytRef.current.unMute()
            ytRef.current.setVolume(volume || 80)
            setMuted(false)
        } else {
            ytRef.current.mute()
            setMuted(true)
        }
    }

    const toggleFS = () => {
        if (!document.fullscreenElement) {
            containerRef.current.requestFullscreen()
        } else {
            document.exitFullscreen()
        }
    }

    const qualityLabels = {
        highres: '4K',
        hd1080: '1080p',
        hd720: '720p',
        large: '480p',
        medium: '360p',
        small: '240p',
        tiny: '144p',
        auto: 'Auto',
        default: 'Auto',
    }

    const setQuality = (level) => {
        if (!ytRef.current) return
        ytRef.current.setPlaybackQuality(level)
        setCurrentQuality(level)
        setShowQuality(false)
    }

    const setSpeed = (rate) => {
        if (!ytRef.current) return
        ytRef.current.setPlaybackRate(rate)
        setPlaybackRate(rate)
        setShowSpeed(false)
    }

    const VolumeIcon = () => {
        if (muted || volume === 0) return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
            </svg>
        )
        if (volume < 50) return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
        )
        return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
        )
    }

    return (
        <div
            ref={containerRef}
            className={`wp-container ${isFullscreen ? 'fullscreen' : ''}`}
            onMouseMove={resetHide}
            onMouseLeave={() => playing && setShowControls(false)}
        >
            {/* YouTube iframe — hidden controls */}
            <div className="wp-iframe-wrap">
                <div ref={playerRef} className="wp-iframe" />
            </div>

            {/* Click-to-play overlay (blocks YouTube clicks too) */}
            <div className="wp-click-zone" onClick={togglePlay} />

            {/* Big centered play button when paused */}
            {!playing && ready && (
                <button className="wp-big-play" onClick={togglePlay} aria-label="Reproduzir">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5,3 19,12 5,21" />
                    </svg>
                </button>
            )}

            {/* Loading overlay */}
            {!ready && (
                <div className="wp-loading">
                    <div className="wp-spinner" />
                </div>
            )}

            {/* Controls bar */}
            <div className={`wp-controls ${showControls || !playing ? 'visible' : ''}`}>
                {/* Progress bar */}
                <div className="wp-progress-area" onClick={seek}>
                    <div className="wp-progress-track">
                        <div className="wp-progress-fill" style={{ width: `${progress}%` }} />
                        <div className="wp-progress-thumb" style={{ left: `${progress}%` }} />
                    </div>
                </div>

                <div className="wp-controls-row">
                    {/* Play/Pause */}
                    <button className="wp-btn" onClick={togglePlay} aria-label={playing ? 'Pausar' : 'Reproduzir'}>
                        {playing ? (
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <rect x="6" y="4" width="4" height="16" rx="1" />
                                <rect x="14" y="4" width="4" height="16" rx="1" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5,3 19,12 5,21" />
                            </svg>
                        )}
                    </button>

                    {/* Time */}
                    <span className="wp-time">
                        {formatTime(current)} <span className="wp-time-sep">/</span> {formatTime(duration)}
                    </span>

                    {/* Title */}
                    <span className="wp-title-label">{tutorial.titulo}</span>

                    {/* Volume */}
                    <div
                        className="wp-volume-wrap"
                        onMouseEnter={() => setShowVolume(true)}
                        onMouseLeave={() => setShowVolume(false)}
                    >
                        <button className="wp-btn" onClick={toggleMute} aria-label="Volume">
                            <VolumeIcon />
                        </button>
                        <div className={`wp-volume-slider-wrap ${showVolume ? 'visible' : ''}`}>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={muted ? 0 : volume}
                                onChange={changeVolume}
                                className="wp-volume-slider"
                                aria-label="Nível de volume"
                            />
                        </div>
                    </div>

                    {/* Speed */}
                    <div className="wp-quality-wrap" ref={speedRef}>
                        <button
                            className="wp-btn wp-quality-btn"
                            onClick={() => setShowSpeed(p => !p)}
                            aria-label="Velocidade do vídeo"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="5 4 15 12 5 20 5 4" />
                                <polygon points="13 4 23 12 13 20 13 4" />
                            </svg>
                            <span className="wp-quality-label">{playbackRate === 1 ? '1x' : playbackRate + 'x'}</span>
                        </button>
                        {showSpeed && (
                            <div className="wp-quality-menu">
                                <div className="wp-quality-menu-title">Velocidade</div>
                                {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(rate => (
                                    <button
                                        key={rate}
                                        className={`wp-quality-option ${playbackRate === rate ? 'active' : ''}`}
                                        onClick={() => setSpeed(rate)}
                                    >
                                        {playbackRate === rate && (
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        )}
                                        {rate === 1 ? 'Normal' : `${rate}x`}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Quality */}
                    {qualityLevels.length > 0 && (
                        <div className="wp-quality-wrap" ref={qualityRef}>
                            <button
                                className="wp-btn wp-quality-btn"
                                onClick={() => setShowQuality(p => !p)}
                                aria-label="Qualidade do vídeo"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="3" />
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                </svg>
                                <span className="wp-quality-label">{qualityLabels[currentQuality] || currentQuality}</span>
                            </button>
                            {showQuality && (
                                <div className="wp-quality-menu">
                                    <div className="wp-quality-menu-title">Qualidade</div>
                                    {qualityLevels.map(level => (
                                        <button
                                            key={level}
                                            className={`wp-quality-option ${currentQuality === level ? 'active' : ''}`}
                                            onClick={() => setQuality(level)}
                                        >
                                            {currentQuality === level && (
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            )}
                                            {qualityLabels[level] || level}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Fullscreen */}
                    <button className="wp-btn" onClick={toggleFS} aria-label="Tela cheia">
                        {isFullscreen ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

// ──────────────────────────────────────────────────────────────
// Sidebar card
// ──────────────────────────────────────────────────────────────
function VideoCard({ tutorial, isActive, onClick }) {
    return (
        <button
            className={`tutorial-card ${isActive ? 'active' : ''}`}
            onClick={onClick}
            id={`tutorial-${tutorial.id}`}
        >
            <div className="tutorial-card-thumb">
                <img
                    src={`https://img.youtube.com/vi/${tutorial.youtubeId}/mqdefault.jpg`}
                    alt={tutorial.titulo}
                    loading="lazy"
                />
                <div className="tutorial-play-overlay">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="12" fill="rgba(255,84,139,0.9)" />
                        <polygon points="10,8 17,12 10,16" fill="white" />
                    </svg>
                </div>
                <span className="tutorial-numero">Vídeo {tutorial.numero}</span>
            </div>
            <div className="tutorial-card-info">
                <div className="tutorial-card-playing-badge">
                    <span className="playing-dot" />
                    Reproduzindo
                </div>
                <h3>{tutorial.titulo}</h3>
                <p>{tutorial.descricao}</p>
                <div className="tutorial-tags">
                    {tutorial.tags.map(tag => (
                        <span key={tag} className="tutorial-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </button>
    )
}

// ──────────────────────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────────────────────
function TutoriaisPage() {
    const [activeVideo, setActiveVideo] = useState(tutoriais[0])

    return (
        <div className="article-wrapper">
            <div className="tutorials-layout">
                {/* Hero */}
                <div className="tutorials-hero">
                    <div className="tutorials-hero-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polygon points="23 7 16 12 23 17 23 7" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                        Tutoriais em Vídeo
                    </div>
                    <h1>Aprenda na prática</h1>
                    <p>Vídeos passo a passo para você dominar a plataforma Wamei e atender ainda melhor seus clientes.</p>

                </div>

                {/* Player + List */}
                <div className="tutorials-player-section">
                    {/* Player */}
                    <div className="tutorials-player-wrapper">
                        <WameiPlayer key={activeVideo.youtubeId} tutorial={activeVideo} />
                        <div className="tutorials-player-info">
                            <div className="tutorials-player-meta">
                                <span className="tutorial-numero-badge">Vídeo {activeVideo.numero}</span>
                                {activeVideo.tags.map(tag => (
                                    <span key={tag} className="tutorial-tag">{tag}</span>
                                ))}
                            </div>
                            <h2 className="tutorials-player-title">{activeVideo.titulo}</h2>
                            <p className="tutorials-player-desc">{activeVideo.descricao}</p>
                        </div>
                    </div>

                    {/* Playlist */}
                    <div className="tutorials-list">
                        <div className="tutorials-list-header">
                            <div className="tutorials-list-header-left">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" />
                                    <line x1="8" y1="18" x2="21" y2="18" />
                                    <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" />
                                    <line x1="3" y1="18" x2="3.01" y2="18" />
                                </svg>
                                Playlist
                                <span className="tutorials-list-header-count">{tutoriais.length}</span>
                            </div>
                        </div>
                        <div className="tutorials-cards">
                            {tutoriais.map(t => (
                                <VideoCard
                                    key={t.id}
                                    tutorial={t}
                                    isActive={activeVideo.id === t.id}
                                    onClick={() => setActiveVideo(t)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="tutorials-cta">
                    <div className="tutorials-cta-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                    </div>
                    <div>
                        <h3>Ficou com dúvidas?</h3>
                        <p>Nossa equipe de suporte está pronta para ajudar você.</p>
                    </div>
                    <a
                        href="https://wa.me/558596093545"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tutorials-cta-btn"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Falar com Suporte
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TutoriaisPage

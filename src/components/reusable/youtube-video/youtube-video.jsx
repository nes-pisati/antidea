import React, { useEffect, useRef, useState } from "react";
import Styles from "./youtube-video.module.css"


function getVideoId(url) {
    if (!url) return null;

    const patterns = [
        /[?&]v=([a-zA-Z0-9_-]{11})/,
        /youtu\.be\/([a-zA-Z0-9_-]{11})/,
        /\/embed\/([a-zA-Z0-9_-]{11})/,
        /\/shorts\/([a-zA-Z0-9_-]{11})/
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }

    // se da WordPress arriva direttamente l'id
    return /^[a-zA-Z0-9_-]{11}$/.test(url.trim()) ? url.trim() : null;
}

export default function YoutubeVideo({ url, title = "Video" }) {
    const containerRef = useRef(null);
    const iframeRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    const videoId = getVideoId(url);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || !videoId) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setShouldLoad(true);
                // se l'iframe è già montato riprende la riproduzione
                iframeRef.current?.contentWindow?.postMessage(
                    JSON.stringify({ event: "command", func: "playVideo", args: [] }),
                    "*"
                );
            } else {
                iframeRef.current?.contentWindow?.postMessage(
                    JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
                    "*"
                );
            }
        }, { threshold: 0.5 });

        observer.observe(container);
        return () => observer.disconnect();
    }, [videoId]);

    if (!videoId) return null;

    const params = new URLSearchParams({
        autoplay: "1",
        mute: "1",          
        playsinline: "1",
        controls: "0",      
        disablekb: "1",     
        iv_load_policy: "3",
        rel: "0",
        loop: "1",
        playlist: videoId,  
        enablejsapi: "1"
    });

    const src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

    return (
        <div ref={containerRef} className={Styles.container}>
            {shouldLoad && (
                <>
                    <iframe
                        ref={iframeRef}
                        className={Styles.iframe}
                        src={src}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                    <div className={Styles.overlay} />
                </>
            )}
        </div>
    )
}

const BASE = process.env.REACT_APP_WP_API_URL

function mapProgetto(wp) {
    const acf = wp.acf || {}

    const images = [
        acf.immagine1, acf.immagine2, acf.immagine3,
        acf.immagine4, acf.immagine5, acf.immagine6,
        acf.immagine7, acf.immagine8, acf.immagine9,
        acf.immagine10
    ].filter(Boolean) // rimuove i campi vuoti

    return {
        slug: wp.slug,
        title: wp.title?.rendered || '',
        bgImage: wp._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
        location: acf.luogo || '',
        subtitle: acf.sottotitolo || '',
        maintext: acf.maintext || '',
        description: acf.descrizione || '',
        images,
        mission: acf.mission || '',
        vision: "Antidea. Un'idea prima dell'idea. Lampo. Intuizione. O un'idea contro l'idea. Contro l'idea consueta, contro il luogo comune. O, ancora, davanti alla dea, senza incertezza di fronte a ogni liturgia, a ogni devozione o convenienza. Antidea racconterà storie prima, contro e davanti. Le storie di tutti, semplici, a volte nascoste. Vere. Sempre.",
        closingText: acf.testo_conclusivo || ''
    }
}

function mapEvento(wp) {
    const acf = wp.acf || {}

    return {
        slug: wp.slug,
        title: wp.title?.rendered || '',
        cardSubtitle: acf.cardsubtitle || '',
        cardImg: wp._embedded?.['wp:featuredmedia']?.[0]?.source_url || acf.locandina || '',
        mainText: acf.testo_principale || '',
        secondaryText: acf.testo_secondario || '',
        images: acf.locandina ? [acf.locandina] : [],
        closingText: acf.testo_sotto_locandina || ''
    }
}

export async function getProgetti() {
    const res = await fetch(
        `${BASE}/progetti?_fields=id,slug,title,excerpt,acf,_links&per_page=100&acf_format=standard&_embed=wp:featuredmedia`
    )
    if (!res.ok) throw new Error('Errore nel caricamento dei progetti')
    const data = await res.json()
    return data.map(mapProgetto)
}

export async function getProgetto(slug) {
    const res = await fetch(
        `${BASE}/progetti?slug=${slug}&_fields=id,slug,title,excerpt,acf,_links&acf_format=standard&_embed=wp:featuredmedia`
    )
    if (!res.ok) throw new Error('Progetto non trovato')
    const data = await res.json()
    return data[0] ? mapProgetto(data[0]) : null
}

export async function getEventi() {
    const res = await fetch(
        `${BASE}/eventi?_fields=id,slug,title,excerpt,acf,_links&per_page=100&acf_format=standard&_embed=wp:featuredmedia`
    )
    if (!res.ok) throw new Error('Errore nel caricamento degli eventi')
    const data = await res.json()
    return data.map(mapEvento)
}
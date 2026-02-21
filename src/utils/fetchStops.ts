import axios from 'axios';

export async function fetchStops() {
    const response = await axios.get('https://data.angers.fr/api/explore/v2.1/catalog/datasets/horaires-theoriques-et-arrets-du-reseau-irigo-gtfs/exports/csv?timezone=UTC&include_links=false&include_app_metas=false');
    return response.data;
}
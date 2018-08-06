function resolveKey(key: string): string {
    return `alm_${key}`;
}

export function remember<T>(key: string, data: T): void {
    localStorage.setItem(resolveKey(key), JSON.stringify(data));
}

export function get<T>(key: string): T | null {
    const dataString = localStorage.getItem(resolveKey(key));

    if (dataString === null) {
        return null;
    }

    return JSON.parse(dataString) as T;
}

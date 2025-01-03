import { format, formatDistance } from 'date-fns';
import { zhCN } from 'date-fns/locale';

export function formatTimestamp(timestamp: string): { short: string; full: string } {
	return {
		short: format(new Date(Number(timestamp) * 1000), 'yyyy/MM/dd'),
		full: format(new Date(Number(timestamp) * 1000), 'yyyy/MM/dd HH:mm:ss')
	};
}

export function getTimeAgo(timestamp: string): string {
	return formatDistance(Number(timestamp) * 1000, new Date(), { addSuffix: true, locale: zhCN });
}

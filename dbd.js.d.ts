declare module 'dbd.js' {
	export class Client {
		constructor(options: ClientOptions);

		public interactionCommand(d?: object): void;
		public deletedCommand(d?: object): void;
		public botJoinCommand(d?: object): void;
		public botLeaveCommand(d?: object): void;
		public readyCommand(d?: object): void;
		public reactionAddCommand(d?: object): void;
		public reactionRemoveCommand(d?: object): void;
		public banAddCommand(d?: object): void;
		public banRemoveCommand(d?: object): void;
		public inviteCreateCommand(d?: object): void;
		public inviteDeleteCommand(d?: object): void;
		public awaitedCommand(d?: object): void;
		public leaveCommand(d?: object): void;
		public updateCommand(d?: object): void;
		public musicStartCommand(d?: object): void;
		public joinCommand(d?: object): void;
		public status(d?: StatusOptions): void;
		public command(...args: CommandOptions[]): void;
		public loadCommand(path: string, debug?: boolean): void;
		public onInteractionCreate(): void;
		public onInviteCreate(): void;
		public onInviteDelete(): void;
		public onBanAdd(): void;
		public onBanRemove(): void;
		public onMusicStart(): void;
		public onMessage(options?: MessageEventOptions): void;
		public onGuildJoin(): void;
		public onGuildLeave(): void;
		public onJoined(): void;
		public onReactionAdd(): void;
		public onReactionRemove(): void;
		public onLeave(): void;
		public onMessageUpdate(): void;
		public onMessageDelete(): void;
		public variables(op?: object): void;
	}

	interface ClientOptions {
		sharding?: boolean;
		shardAmount?: number;
		autoUpdate: boolean;
		dbhToken: string;
		token: string;
		prefix: string;
	}

	interface StatusOptions {
		type?: string;
		text?: string;
		time?: number;
		url?: string;
	}

	interface CommandOptions {
		name: string;
		code: string;
		aliases: string[];
	}

	interface MessageEventOptions {
		guildOnly?: boolean;
		respondToBots?: boolean;
	}
}

import discord
import config
from config import token
from discord.ext import commands
from discord.ext.commands import Bot

client = commands.Bot(command_prefix='b-')

@client.event
async def on_ready():
	print("Command clear is ready")

@client.command() #команда для удаления сообщений в чате
@commands.has_permissions(administrator=True)
async def clear(ctx, amount=None):
    await ctx.channel.purge(limit=int(amount))

client.run(token)
import { hyprland } from "@/global"
import { createBinding, createEffect, createState, For, With } from "ags"
import { exec } from "ags/process"
import { options } from "options"

export const Workspaces = () => {
	const focusedWorkspace = createBinding(hyprland, "focusedWorkspace")
	const [workspaces, setWorkspaces] = createState<number[]>([])
	const workspaceButtons = [...Array(options.bar.workspaces.count).keys()]

	createEffect(() => {
		const ws = focusedWorkspace()
		const current = ws.id

		const start = Math.floor((current - 1) / 10) * 10 + 1
		const end = start + 9

		const visible = []

		for (let i = start; i <= end; i++) {
			visible.push(i)
		}
		setWorkspaces(visible)
	})

	return (
		<box>
			<With value={workspaces}>
				{(workspaces) => (
					<box
						cssClasses={["workspaces"]}
						spacing={options.bar.workspaces.spacing}
					>
						{workspaceButtons.map((w) => {
							const id = workspaces[w]

							if (id === undefined) return null

							return (
								<button
									cssClasses={focusedWorkspace.as((fw) => [
										"workspace",
										id === fw.id ? "selectedWorkspace" : "",
									])}
									onClicked={() => exec(`hyprctl dispatch \'hl.dsp.focus({ workspace = ${id} })\'`)}
								>
									<label label={id.toString()} />
								</button>
							)
						})}
					</box>
				)}
			</With>
		</box>
	)
}
